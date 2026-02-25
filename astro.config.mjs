import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://hehehappyplace.com/en/",
  integrations: [mdx(), sitemap(), tailwind()],
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en", // fallback
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
