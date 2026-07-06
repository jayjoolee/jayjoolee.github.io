// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jayjoolee.github.io',
  build: {
    inlineStylesheets: 'always',
  },
});
