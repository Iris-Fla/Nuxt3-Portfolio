// https://nuxt.com/docs/api/configuration/nuxt-config
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "usebootstrap",
    "usebootstrap-docs",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  css: ["~/assets/css/default.css", "bootstrap/scss/bootstrap.scss"],
  app: {
    head: {
      title: "SuirenMeru",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  experimental: {
    viewTransition: true,
  },
  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
      apiKey: API_KEY,
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
