export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'parking',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/main.scss"
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],


  styleResources: {
    scss: [
      './node_modules/bootstrap/scss/_functions.scss',
      '~bootstrap/scss/_variables.scss',
      '~bootstrap/scss/_mixins.scss',
      '~bootstrap-vue/src/_variables.scss',
      "./assets/scss/main.scss"
    ]
  },



  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://parkos.nl/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
