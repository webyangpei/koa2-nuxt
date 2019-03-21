const pkg = require('./package')
const webpack = require('webpack')

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
    'ant-design-vue/dist/antd.css'
  ],
  plugins: [
    { src: '@/plugins/antd', ssr: false },
    { src: '@/plugins/vue-components', ssr: false }
  ],
  modules: [
  ],
  build: {
	  analyze: true,
    transpile: [/^element-ui/],
    extend(config, { isClient, isServer }) {
	    config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
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
