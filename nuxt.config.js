export default {
  /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
   mode: 'universal',
   
   /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
   target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
  */
   css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
