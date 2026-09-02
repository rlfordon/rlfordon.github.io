"""One-time migration: convert archived AI Law Librarians posts (raw WordPress HTML
from the Wayback Machine) into Markdown files for the Astro blog collection.

Usage: python scripts/convert-posts.py
Reads  archive/ailawlibrarians/posts/*.html and archive/ailawlibrarians/images/
Writes src/content/blog/<slug>.md and public/images/blog/<slug>/<image>
"""
import re, json, html, shutil, sys
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup, NavigableString
from markdownify import MarkdownConverter

ROOT = Path(__file__).resolve().parent.parent
ARCH = ROOT / "archive" / "ailawlibrarians"
OUT_MD = ROOT / "src" / "content" / "blog"
OUT_IMG = ROOT / "public" / "images" / "blog"

EXCLUDE = {
    "ghost-in-the-machine",                         # guest post by Debbie Ginsberg
    "announcing-the-ai-law-librarians-prompt-library",  # group-resource announcement
}
WAYBACK = re.compile(r"^https?://web\.archive\.org/web/\d+(?:im_|id_|if_)?/")

manifest = {m["file"][:-5]: m for m in json.load(open(ARCH / "manifest.json", encoding="utf-8"))}
slugs = [s for s in manifest if s not in EXCLUDE]
slug_by_url = {}
for s in slugs:
    u = manifest[s]["original_url"].rstrip("/")
    slug_by_url[u] = s
    slug_by_url[u.replace("https://www.", "https://")] = s


def clean_url(u: str) -> str:
    u = WAYBACK.sub("", u.strip())
    if "ailawlibrarians.com" in u:
        base = u.split("?")[0].split("#")[0].rstrip("/")
        if base in slug_by_url:
            return f"/blog/{slug_by_url[base]}/"
        if "/wp-content/uploads/" not in u:
            return "https://web.archive.org/web/2026/" + u
    return u


class Conv(MarkdownConverter):
    def convert_figure(self, el, text, parent_tags=None, **kw):
        return "\n\n" + text.strip() + "\n\n"

    def convert_figcaption(self, el, text, parent_tags=None, **kw):
        t = text.strip()
        return f"\n\n*{t}*\n\n" if t else ""

    def convert_iframe(self, el, text, parent_tags=None, **kw):
        src = clean_url(el.get("src", ""))
        if "youtube.com/embed" in src:
            vid = src.split("/embed/")[1].split("?")[0]
            return (f'\n\n<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/{vid}" '
                    f'title="YouTube video" loading="lazy" allowfullscreen></iframe></div>\n\n')
        return f"\n\n[Embedded content]({src})\n\n"

    def convert_s(self, el, text, parent_tags=None, **kw):
        return f"~~{text}~~" if text.strip() else ""


def convert(slug: str):
    m = manifest[slug]
    soup = BeautifulSoup((ARCH / "posts" / f"{slug}.html").read_text(encoding="utf-8", errors="ignore"), "html.parser")
    desc = soup.find("meta", property="og:description")
    desc = html.unescape(desc["content"]).strip() if desc else ""
    desc = re.sub(r"\s+", " ", desc)
    if len(desc) > 180:  # og:description is a truncated excerpt; cut at the last full sentence
        cut = max(desc.rfind(". ", 0, 200), desc.rfind("? ", 0, 200), desc.rfind("! ", 0, 200))
        desc = desc[:cut + 1] if cut > 60 else desc[:177].rsplit(" ", 1)[0] + "…"
    body = soup.select_one("div.entry-content")

    # drop WordPress sharing / related-post chrome if present inside entry-content
    for sel in [".sharedaddy", ".jp-relatedposts", "#jp-relatedposts", ".wp-block-jetpack-related-posts", "script", "style", "noscript"]:
        for n in body.select(sel):
            n.decompose()

    # images: map to local copies
    img_dir = OUT_IMG / slug
    img_dir.mkdir(parents=True, exist_ok=True)
    used = {}
    for img in body.find_all("img"):
        src = clean_url(img.get("src", ""))
        fn = Path(urlparse(src).path).name
        cand = ARCH / "images" / f"{slug[:40]}__{fn}"
        if not cand.exists():
            print(f"  !! missing image for {slug}: {src}", file=sys.stderr)
            continue
        if fn in used and used[fn] != src:
            print(f"  !! filename collision in {slug}: {fn}", file=sys.stderr)
        used[fn] = src
        shutil.copyfile(cand, img_dir / fn)
        img["src"] = f"/images/blog/{slug}/{fn}"
        for a in ("srcset", "sizes", "decoding", "loading", "class", "width", "height", "data-id"):
            if img.has_attr(a):
                del img[a]
        img["alt"] = re.sub(r"\s+", " ", img.get("alt") or "").strip()
        # unwrap links that just point at the image itself
        p = img.parent
        if p.name == "a" and "/wp-content/uploads/" in clean_url(p.get("href", "")):
            p.unwrap()

    for a in body.find_all("a", href=True):
        a["href"] = clean_url(a["href"])

    # body h1 -> h2 (the page template supplies the h1)
    for h in body.find_all("h1"):
        h.name = "h2"
    # UAGB advanced heading blocks -> plain h2
    for d in body.select(".wp-block-uagb-advanced-heading"):
        t = d.get_text(" ", strip=True)
        d.replace_with(BeautifulSoup(f"<h2>{html.escape(t)}</h2>", "html.parser"))

    md = Conv(heading_style="ATX", bullets="-", escape_underscores=False, escape_asterisks=False,
              escape_misc=False, wrap=False).convert_soup(body)
    md = md.replace("\xa0", " ")
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md).strip() + "\n"

    fm = {
        "title": m["title"],
        "description": desc,
        "pubDate": m["date"],
        "originalUrl": m["original_url"],
        "originalSite": "AI Law Librarians",
        "categories": [c for c in m["categories"] if c != "Uncategorized"],
        "tags": m["tags"],
    }
    def yq(s): return json.dumps(s, ensure_ascii=False)
    lines = ["---"]
    for k, v in fm.items():
        if isinstance(v, list):
            lines.append(f"{k}: [{', '.join(yq(x) for x in v)}]")
        else:
            lines.append(f"{k}: {yq(v)}")
    lines.append("---")
    (OUT_MD / f"{slug}.md").write_text("\n".join(lines) + "\n\n" + md, encoding="utf-8", newline="\n")
    return len(md.split())


OUT_MD.mkdir(parents=True, exist_ok=True)
total = 0
for s in sorted(slugs, key=lambda s: manifest[s]["date"]):
    w = convert(s)
    total += w
    print(f"{manifest[s]['date']}  {w:5d}w  {s}")
print(f"{len(slugs)} posts, {total} words")
