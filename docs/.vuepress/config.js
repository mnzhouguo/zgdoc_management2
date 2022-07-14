const { defaultTheme } = require('@vuepress/theme-default')
const { viteBundler } = require('@vuepress/bundler-vite')
const { searchPlugin } = require('@vuepress/plugin-search')
// const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
    base:'doc',
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    theme: defaultTheme({
      // 默认主题配置
      navbar: [
        {
          text: '首页',
          link: '/',
        },
        {
          text: '首页2',
          link: '/',
        },
        {
          text: '首页3',
          link: '/',
        }
      ],
    }),

    bundler: viteBundler({
      viteOptions: {},
      vuePluginOptions: {},
    }),

     plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ]

  }