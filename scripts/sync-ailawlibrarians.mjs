/**
 * Import my new posts from AI Law Librarians (WordPress) into the blog collection.
 *
 * Usage: node scripts/sync-ailawlibrarians.mjs
 * Reads  the WordPress REST API at ailawlibrarians.com
 * Writes src/content/blog/<slug>.md and public/images/blog/<slug>/<image>
 *
 * A post is new when no local post has its URL as `originalUrl`. To keep a post out
 * for good (deleting its file is not enough, it would come back), add its slug to SKIP.
 * A local draft with the same title and no `originalUrl` is replaced by the published copy,
 * which keeps the draft's description; otherwise the description comes from the excerpt.
 * Runs daily in .github/workflows/sync-ailawlibrarians.yml.
 */
import { readdir, readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import { appendFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';
import { tables, strikethrough } from 'turndown-plugin-gfm';

const API = 'https://www.ailawlibrarians.com/wp-json/wp/v2';
const AUTHOR_ID = 2; // Rebecca Fordon on ailawlibrarians.com
const SITE_NAME = 'AI Law Librarians';
const SKIP = new Set([
  'ghost-in-the-machine', // guest post by Debbie Ginsberg, published under my account
  'announcing-the-ai-law-librarians-prompt-library', // group-resource announcement
]);
/** Hosts of this site; links to them become root-relative. */
const OWN_HOSTS = new Set(['rlfordon.github.io', 'rebeccafordon.com']);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_MD = path.join(ROOT, 'src', 'content', 'blog');
const OUT_IMG = path.join(ROOT, 'public', 'images', 'blog');

async function getJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'rebeccafordon.com post sync' } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return { data: await res.json(), headers: res.headers };
}

async function fetchAll(endpoint, params) {
  const out = [];
  for (let page = 1; ; page++) {
    const { data, headers } = await getJson(`${API}/${endpoint}?${new URLSearchParams({ ...params, per_page: 100, page })}`);
    out.push(...data);
    if (page >= Number(headers.get('x-wp-totalpages') ?? 1)) return out;
  }
}

const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', ndash: '–', mdash: '—', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', rarr: '→' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
    e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : (NAMED[e.toLowerCase()] ?? m),
  );
const plain = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

/** host + path, no www, query, hash, or trailing slash: the key for matching post URLs. */
function urlKey(u) {
  try {
    const x = new URL(u);
    return x.host.replace(/^www\./, '') + x.pathname.replace(/\/+$/, '');
  } catch {
    return null;
  }
}

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const get = (k) => m?.[1].match(new RegExp(`^${k}:\\s*(.*)$`, 'm'))?.[1].trim().replace(/^["']|["']$/g, '');
  return { originalUrl: get('originalUrl'), title: get('title'), description: get('description'), draft: get('draft') === 'true' };
}

/** The excerpt is the first ~55 words; keep whole sentences, as the original migration did. */
function describe(excerptHtml) {
  let d = plain(excerptHtml.replace(/<a [^>]*>\s*Continue reading[\s\S]*?<\/a>/i, '')).replace(/\s*(…|\[…\]|\.\.\.)$/, '');
  if (d.length > 180) {
    const cut = Math.max(d.lastIndexOf('. ', 200), d.lastIndexOf('? ', 200), d.lastIndexOf('! ', 200));
    d = cut > 60 ? d.slice(0, cut + 1) : d.slice(0, 177).replace(/\s+\S*$/, '') + '…';
  }
  return d;
}

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced', emDelimiter: '*' });
td.use([tables, strikethrough]);
td.remove(['script', 'style', 'noscript']);
td.addRule('h1', { filter: 'h1', replacement: (c) => `\n\n## ${c.trim()}\n\n` }); // the page supplies the h1
td.addRule('figure', { filter: 'figure', replacement: (c) => `\n\n${c.trim()}\n\n` });
td.addRule('figcaption', {
  filter: 'figcaption',
  replacement: (_c, node) => (node.innerHTML.trim() ? `\n\n<p class="caption"><em>${node.innerHTML.trim()}</em></p>\n\n` : ''),
});
td.addRule('image-link', {
  // a link that only wraps an uploaded image: keep the image, drop the link
  filter: (n) => n.nodeName === 'A' && n.childNodes.length === 1 && n.firstChild.nodeName === 'IMG' && /\/wp-content\/uploads\/|^\/images\//.test(n.getAttribute('href') ?? ''),
  replacement: (c) => c,
});
td.addRule('empty-link', { filter: (n) => n.nodeName === 'A' && !n.textContent.trim() && !n.querySelector('img'), replacement: () => '' });
td.addRule('listItem', {
  // turndown pads bullets to four columns; the other posts use "- " and "1. "
  filter: 'li',
  replacement: (c, node, opts) => {
    const parent = node.parentNode;
    const prefix = parent.nodeName === 'OL' ? `${(Number(parent.getAttribute('start')) || 1) + [...parent.children].indexOf(node)}. ` : `${opts.bulletListMarker} `;
    c = c.replace(/^\n+/, '').replace(/\n+$/, '\n').replace(/\n/gm, '\n' + ' '.repeat(prefix.length));
    return prefix + c + (node.nextSibling && !/\n$/.test(c) ? '\n' : '');
  },
});
td.addRule('iframe', {
  filter: 'iframe',
  replacement: (_c, node) => {
    const src = node.getAttribute('src') ?? '';
    const yt = src.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]+)/);
    if (yt)
      return `\n\n<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="YouTube video" loading="lazy" allowfullscreen></iframe></div>\n\n`;
    return `\n\n[Embedded content](${src})\n\n`;
  },
});

async function download(url, dir) {
  const name = decodeURIComponent(path.basename(new URL(url).pathname)).replace(/[^\w.-]+/g, '-');
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} downloading ${url}`);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, name), Buffer.from(await res.arrayBuffer()));
  return name;
}

async function convert(post, slugByKey) {
  const slug = post.slug;
  let html = post.content.rendered;

  // images: local copies; srcset and sizes point at WordPress, so drop them
  html = html.replace(/\s(srcset|sizes)="[^"]*"/g, '');
  const imgs = [...new Set([...html.matchAll(/<img[^>]*?\ssrc="([^"]+)"/g)].map((m) => m[1]))];
  for (const raw of imgs) {
    const name = await download(decode(raw), path.join(OUT_IMG, slug));
    html = html.replaceAll(`src="${raw}"`, `src="/images/blog/${slug}/${name}"`);
  }

  // links: my other posts go to their copies here, links to this site become relative
  html = html.replace(/\shref="([^"]+)"/g, (m, raw) => {
    const href = decode(raw);
    const key = urlKey(href);
    if (key && slugByKey.has(key)) return ` href="/blog/${slugByKey.get(key)}/"`;
    try {
      const u = new URL(href);
      if (OWN_HOSTS.has(u.host.replace(/^www\./, ''))) return ` href="${u.pathname}${u.search}${u.hash}"`;
    } catch {}
    return m;
  });

  let md = td.turndown(html);
  md = md.replace(/ /g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
  return { md, images: imgs.length };
}

const yq = (s) => JSON.stringify(s);

async function main() {
  const files = (await readdir(OUT_MD)).filter((f) => f.endsWith('.md'));
  const local = await Promise.all(files.map(async (f) => ({ file: f, ...frontmatter(await readFile(path.join(OUT_MD, f), 'utf8')) })));
  const slugByKey = new Map(local.filter((p) => p.originalUrl).map((p) => [urlKey(p.originalUrl), p.file.replace(/\.md$/, '')]));

  const posts = await fetchAll('posts', { author: AUTHOR_ID, status: 'publish', orderby: 'date', order: 'asc' });
  const fresh = posts.filter((p) => !SKIP.has(p.slug) && !slugByKey.has(urlKey(p.link)));
  for (const p of fresh) slugByKey.set(urlKey(p.link), p.slug); // so posts imported together link to each other

  if (fresh.length) {
    const ids = (key) => [...new Set(fresh.flatMap((p) => p[key]))].join(',');
    const [cats, tags] = await Promise.all([fetchAll('categories', { include: ids('categories') }), fetchAll('tags', { include: ids('tags') })]);
    const names = new Map([...cats, ...tags].map((t) => [t.id, decode(t.name)]));

    for (const p of fresh) {
      const title = plain(p.title.rendered);
      const drafts = local.filter((l) => l.draft && !l.originalUrl && l.title === title && l.file !== `${p.slug}.md`);
      const { md, images } = await convert(p, slugByKey);
      const fm = {
        title,
        description: drafts.find((d) => d.description)?.description ?? describe(p.excerpt.rendered),
        pubDate: p.date.slice(0, 10),
        originalUrl: p.link.replace(/\?.*$/, ''),
        originalSite: SITE_NAME,
        categories: p.categories.map((id) => names.get(id)).filter((c) => c && c !== 'Uncategorized'),
        tags: p.tags.map((id) => names.get(id)).filter(Boolean),
      };
      const head = Object.entries(fm).map(([k, v]) => `${k}: ${Array.isArray(v) ? `[${v.map(yq).join(', ')}]` : yq(v)}`);
      await writeFile(path.join(OUT_MD, `${p.slug}.md`), `---\n${head.join('\n')}\n---\n\n${md}`, 'utf8');
      console.log(`added    ${fm.pubDate}  ${p.slug}  (${md.split(/\s+/).length} words, ${images} images)`);

      for (const d of drafts) {
        await unlink(path.join(OUT_MD, d.file));
        console.log(`replaced draft ${d.file}`);
      }
    }
  }
  console.log(`${posts.length} posts by author ${AUTHOR_ID}; ${fresh.length} new`);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `added=${fresh.length}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
