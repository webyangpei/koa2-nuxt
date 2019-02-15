const pkg = require('./package')


module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    { src: '@/plugins/element-ui', ssr: false },
    { src: '@/plugins/vue-components', ssr: false }
  ],
  modules: [
  ],
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {

    }
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  ignorePrefix: '-',
  generate: {
    subFolders: true
  },
}
