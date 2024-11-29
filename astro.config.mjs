import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@images": path.resolve("./public/images"),
        "@components": path.resolve("./src/components"),
      },
    },
  },
});
