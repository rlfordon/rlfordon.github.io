# rebeccafordon.com

Personal site: writing, projects, about. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Layout

| Path | What |
|---|---|
| `src/content/blog/*.md` | Blog posts. One Markdown file per post with YAML frontmatter. |
| `src/data/projects.ts` | Hand-curated project list, grouped into teaching tools, research tooling, and fun; the home page shows the first three of each. |
| `src/content/resources/*.yaml` | Resource catalog. One YAML record per book, course, or site; the file name is the record id. Neutral descriptions only. |
| `src/content/guides/*.yaml` | Curated reading lists built from catalog records: a flat list of record ids, each with an optional note for that list. The page sorts and filters; file order is not shown. |
| `src/lib/resources.ts` | Record helpers: formatting, the facet definitions (kind groups, audiences, published buckets), and sort keys. |
| `src/data/topics.ts` | Controlled vocabulary for chapter topics, grouped, with a scope note per term. The build rejects any topic id not listed here. |
| `src/data/search-synonyms.ts` | Query expansion groups for the in-page search. |
| `src/pages/` | Routes: home, `/blog/`, `/blog/[slug]/`, `/projects/`, `/resources/`, `/resources/[guide]/`, `/about/`, `/rss.xml`. |
| `src/layouts/Base.astro` | Shared shell: head, masthead, nav, footer. |
| `src/styles/global.css` | All styling. Palette, type, and layout tokens at the top. Light-only by design. |
| `public/images/blog/<slug>/` | Post images. |
| `public/fonts/` | Self-hosted Fraunces and Montserrat (variable, Latin subset) with their SIL OFL license files. |
| `archive/ailawlibrarians/` | Raw Wayback Machine backup of the AI Law Librarians posts and shared pages. Not published. |
| `scripts/convert-posts.py` | One-time migration that produced the blog Markdown from the archive. |

## Writing a new post

Create `src/content/blog/my-post-slug.md`:

```md
---
title: "Post title"
description: "One or two sentences for the list page and RSS."
pubDate: 2026-09-15
tags: ["legal research", "AI"]
---

Body in Markdown. Images go in `public/images/blog/my-post-slug/` and are referenced as
`/images/blog/my-post-slug/file.png`.
```

Add `draft: true` to keep a post out of the build. The `originalUrl` and `originalSite` fields are only for
republished posts; they render the provenance note at the top of the article.

## Adding a resource

Create `src/content/resources/author-short-title.yaml`. The schema is in `src/content.config.ts`; the required
fields are `title`, `kind`, `access`, `url`, `description`, `added`, and `verified`.

```yaml
title: "Book Title"
authors:
  - name: Jane Doe
publisher: West Academic
date: 2026-04            # YYYY, YYYY-MM, or YYYY-MM-DD; add `status: forthcoming` if not yet out
pages: 618
kind: study-aid          # textbook, casebook, open-casebook, study-aid, practitioner-book, monograph,
                         # supplement, treatise, online-course, syllabus, website, article, bibliography
access: subscription     # open (free + open license), free (free to read), subscription, purchase
via: West Academic Study Aids   # subscription platform
price: "$65 print"
url: https://example.com/book
description: >
  One to three neutral sentences: what it is and what it covers.
contents:                # optional chapter list; topics go on chapters, not the book
  - title: "Chapter title"
    note: One line on what it covers; search indexes it, so name the sub-topics.
    topics: [evidence-and-deepfakes]   # ids from src/data/topics.ts; read the scope notes before tagging
contentsSource: https://example.com/toc
added: 2026-08-14
verified: 2026-08-14
```

Then list it in a guide under `src/content/guides/`, as `- ref: author-short-title` with an optional `note` that is
specific to that list. Everything in these files is public, since the repo is.

The guide page has a topic contents list in the left rail (one topic at a time; the matching chapters are
listed under each record while a topic is chosen), a toolbar with search and two chip filters (access and kind
group), sort by date, title, or first author, and a compact view. With a topic chosen, the search box searches
within that topic and offers "Search everything instead". Topics are tagged on chapters; a record matches a topic
when any of its chapters carries it. Records with no chapter list (courses, articles, sites) may carry whole-work
`topics` instead. The `audience` field is kept on records but not shown as a filter. Search runs in the browser with [MiniSearch](https://github.com/lucaong/minisearch)
over an index embedded in the page (titles, authors, publisher, description, note, and chapter titles and notes);
a hit inside a chapter list shows the chapter under the book. Filter and search state live in the URL query string,
so a filtered view can be linked. The kind groups and other facet labels are defined in `src/lib/resources.ts`.

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages
from the user-site repo `rlfordon/rlfordon.github.io`, so it is served at https://rlfordon.github.io/.

To attach the custom domain later:

1. Register `rebeccafordon.com`.
2. At the registrar, add DNS records: `A` records for the apex pointing at GitHub Pages
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a `CNAME` for `www`
   pointing at `rlfordon.github.io`.
3. Add a `public/CNAME` file containing `rebeccafordon.com` and change `site` in `astro.config.mjs` to
   `https://rebeccafordon.com`.
4. In the repo's Settings → Pages set the custom domain to `rebeccafordon.com` and enable "Enforce HTTPS"
   once the certificate is issued. GitHub then redirects rlfordon.github.io links to the domain.

`archive/ailawlibrarians/pages/` (the group blog's shared pages) is kept locally but not committed; the
posts, images, and manifest are.
