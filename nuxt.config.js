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

  ssr: false,
  nitro: {
    prerender: {
      routes: [
        '/',
        '/rolam',
        '/partnerek',
        '/jogteruletek',
        '/media',
        '/kapcsolat',
        '/drgybence.jpg',
        '/logo.png',
        '/partners/mohacsy_lenard.webp',
        '/partners/nagy_domokos.webp',
        '/partners/ferenczi_milan.webp',
        '/partners/nagy_geza.webp',
        '/partners/papp_gabor.webp',
        '/_ipx/../drgybence.jpg',
        '/_ipx/../logo.png',
        '/_ipx/../partners/mohacsy_lenard.webp',
        '/_ipx/../partners/nagy_domokos.webp',
        '/_ipx/../partners/ferenczi_milan.webp',
        '/_ipx/../partners/nagy_geza.webp',
        '/_ipx/../partners/papp_gabor.webp',
      ],
    },
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
    // provider: 'static',
    domains: ['drgyurkovics.hu'],
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

  hooks: {
    'prerender:routes'({ routes }) {
      routes.clear(); // Do not generate any routes (except the defaults)
    },
  },

  compatibilityDate: '2024-10-19',
});
