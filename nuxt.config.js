// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  // runtimeConfig: {
  //   baseURL: process.env.BASE_URL || 'http://localhost:3000',
  //   WEATHER_API_KEY: process.env.NUXT_WEATHER_API_KEY,
  //   weatherURL: process.env.NUXT_WEATHER_API_URL,
  // },
  googleFonts: {
    prefetch: true,
    families: {
      Merriweather: [300, 700, 900],
      Raleway: [100, 400, 600, 900],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  devtools: { enabled: true },
  postcss: {
    postcssOptions: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  compatibilityDate: '2024-10-19',
});