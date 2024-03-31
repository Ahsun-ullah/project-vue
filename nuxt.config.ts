export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // Add the favicon reference here
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  css: ["~/public/assets/css/main.css"],
  typescript: {
    typeCheck: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
