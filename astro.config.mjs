// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Served by GitHub Pages from the rlfordon/rlfordon.github.io user-site repo.
  // When the custom domain is attached, switch this to https://rebeccafordon.com and add public/CNAME.
  site: 'https://rlfordon.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
