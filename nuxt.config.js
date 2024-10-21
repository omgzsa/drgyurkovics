// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | LL.M. dr. Gyurkovics Bence, ügyvéd',
      htmlAttrs: {
        lang: 'hu',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  image: {
    provider: 'netlify',
  },
  
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
