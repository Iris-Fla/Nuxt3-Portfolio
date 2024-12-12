// https://nuxt.com/docs/api/configuration/nuxt-config
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@vueuse/nuxt",
    "usebootstrap",
    "usebootstrap-docs",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/fonts",
  ],

  css: ["~/assets/css/default.scss"],

  app: {
    head: {
      title: "メルの図書館",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:site_name", content: "メルの図書館" },
        { property: "og:locale", content: "ja_JP" },
        { property: "twitter:site", content: "Iris-Flandre" },
        { property: "twitter:card", content: "summary_large_image" },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  usebootstrap : {
    scss: true,
  },

  runtimeConfig: {
    apiKey: API_KEY,
    public: {
      baseURL: BASE_URL,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/_colors.scss" as *;`,
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

  compatibilityDate: "2024-11-05",
});