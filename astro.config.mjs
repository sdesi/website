// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  // локальная разработка — base = "/"
  // потом, если будешь деплоить на GitHub Pages, сюда вернём base/site
  base: "/",
});
