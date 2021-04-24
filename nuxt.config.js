import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    fallback: true,
  },
  head: {
    titleTemplate: '%s - soluprime',
    title: 'soluprime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        content: 'beautiful template made with nuxtjs by richard',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'It is a template of an example template width nuxtjs inspired by a wordpress template developed by richard.',
      },

      { hid: 'og:type', content: 'website' },
      { hid: 'og:url', content: `${process.env.BASE_URL || ''}` },
      {
        hid: 'og:title',
        content: 'beautiful template made with nuxtjs by richard',
      },
      {
        hid: 'og:description',
        content:
          'It is a template of an example template width nuxtjs inspired by a wordpress template developed by richard.',
      },
      {
        hid: 'og:image',
        content: `${process.env.BASE_URL || ''}/banner.jpg`,
      },

      { hid: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', content: `${process.env.BASE_URL || ''}` },
      {
        hid: 'twitter:title',
        content: 'beautiful template made with nuxtjs by richard',
      },
      {
        hid: 'twitter:description',
        content:
          'It is a template of an example template width nuxtjs inspired by a wordpress template developed by richard.',
      },
      {
        hid: 'twitter:image',
        content: `${process.env.BASE_URL || ''}/banner.jpg`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          indigo: '#1a5691',
        },
      },
    },
  },
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    xhtmlOut: true,
    langPrefix: 'language-',
    quotes: '“”‘’',
    highlight: function (/*str, lang*/) {
      return ''
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
