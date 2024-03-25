// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@vueuse/nuxt',
      'usebootstrap',
      'usebootstrap-docs',
      'nuxt-icon',
      "@nuxt/image",
      "@nuxt/fonts",
      "nuxt-microcms-module",
      {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
      },
  ],
  css:['~/assets/css/default.css',"bootstrap/scss/bootstrap.scss"],
  app: {
      head: {
          title: 'SuirenMeru',
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ],
          link: [
            {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            },
            {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossorigin: "",
            },
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Mochiy+Pop+One&display=swap",
              crossorigin: "",
            },
          ],
      },
  },
  vite: {
      server: {
          watch: {
              usePolling: true
          }
      },
  }
})