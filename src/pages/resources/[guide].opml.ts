import type { APIRoute } from 'astro';
import { getCollection, getEntries } from 'astro:content';
import { opml } from '../../lib/opml';

/** Every feed in a guide as one OPML file, for guides that list any sources with feeds. */
export async function getStaticPaths() {
  const guides = await getCollection('guides', (g) => !g.data.draft);
  const paths = await Promise.all(
    guides.map(async (guide) => {
      const feeds = (await getEntries(guide.data.items.map((i) => i.ref)))
        .filter((e) => e.data.feed)
        .map((e) => ({ title: e.data.title, xmlUrl: e.data.feed!, htmlUrl: e.data.url }))
        .sort((a, b) => a.title.localeCompare(b.title));
      return { params: { guide: guide.id }, props: { title: guide.data.title, feeds } };
    }),
  );
  return paths.filter((p) => p.props.feeds.length > 0);
}

export const GET: APIRoute = ({ props }) =>
  new Response(opml(props.title, props.feeds), { headers: { 'Content-Type': 'text/x-opml; charset=utf-8' } });
