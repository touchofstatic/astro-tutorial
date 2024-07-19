import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: "https://thisismyfirstrodeo.netlify.app/",
  integrations: [preact()]
});