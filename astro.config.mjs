import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@plantas": path.resolve("./public/images/plantas"),
        "@images": path.resolve("./public/images"),
        "@components": path.resolve("./src/components"),
      },
    },
  },
});
