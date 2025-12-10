// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  // локальная разработка — base = "/"
  // потом, еслnp деплоить на GitHub Pages, сюда вернём base/site
  base: "/",
});
