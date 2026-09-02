# rebeccafordon.com

Personal site: writing, projects, about. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Layout

| Path | What |
|---|---|
| `src/content/blog/*.md` | Blog posts. One Markdown file per post with YAML frontmatter. |
| `src/data/projects.ts` | Hand-curated project list, grouped into teaching tools, research tooling, and fun; the home page shows the first three of each. |
| `src/pages/` | Routes: home, `/blog/`, `/blog/[slug]/`, `/projects/`, `/about/`, `/rss.xml`. |
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
