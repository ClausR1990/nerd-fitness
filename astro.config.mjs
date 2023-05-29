import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://clausr1990.github.io",
  // base: "/nerd-fitness",
  integrations: [tailwind()],
});
