import dotenv from 'dotenv'
dotenv.config()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  dev: process.env.NODE_ENV !== 'production',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/contentful', '~/plugins/posts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-graphql-request'],
  graphql: {
    endpoint: 'https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={CDA_TOKEN}',
    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {},
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: 'blogPost',
        }),
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map((entry) => entry.fields.slug)]
      })
    },
  },
}
