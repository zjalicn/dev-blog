// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://nikolazjalic.com",
  integrations: [
    mdx(),
    sitemap(),
    react(), // Required for Lucide icons
    tailwind(),
  ],
});
