/**
 * OPML, the outline format feed readers import and export subscription lists in.
 * Shared by the build (a guide's full feed list) and the browser (the feeds a
 * filtered view is showing), so it uses no Node or DOM APIs.
 */
export type Feed = { title: string; xmlUrl: string; htmlUrl: string };

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function opml(title: string, feeds: Feed[]): string {
  const outlines = feeds
    .map(
      (f) =>
        `    <outline type="rss" text="${escape(f.title)}" title="${escape(f.title)}" xmlUrl="${escape(f.xmlUrl)}" htmlUrl="${escape(f.htmlUrl)}"/>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>${escape(title)}</title>
    <dateCreated>${new Date().toUTCString()}</dateCreated>
  </head>
  <body>
${outlines}
  </body>
</opml>
`;
}
