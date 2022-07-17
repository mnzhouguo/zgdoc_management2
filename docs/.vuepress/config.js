const { defaultTheme } = require('@vuepress/theme-default')
const { viteBundler } = require('@vuepress/bundler-vite')
const { searchPlugin } = require('@vuepress/plugin-search')
const { containerPlugin } = require('@vuepress/plugin-container')

module.exports = {
    // 配置根目录
    base:'zgdoc_management2',
  title: '攀岩飞鱼技术体系',
  description: '构建可靠的大型分布式系统',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: "image/x-icon",
      href: `/favicon.ico`
    }]
  ],
  host: 'localhost',
  // host: '0.0.0.0',
  port: 8080,
  dest: '.vuepress/dist',
  plugins: [
    ['vuepress-plugin-container',
      {

        type: 'right',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'center',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'quote',
        before: info => `<div class="quote"><p class="title">${info}</p>`,
        after: '</div>'
      },
    ],
    ['vuepress-plugin-container',
      {
        type: 'not-print',
        defaultTitle: ''
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162170924-1'
      }
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'acf59fc06b2cf691903d',
    //       // 如果你对"clientSecret"有疑问,可以参考 http://icyfenix.cn/architect-perspective/general-architecture/system-security/authorization.html#oauth2
    //       clientSecret: '4cbf25bbf327f1164627d2ab43263b07b14c54fe',
    //       repo: 'awesome-fenix',
    //       owner: 'zg',
    //       admin: ['zg'],
    //       labels: ["Gitalk", "Comment"],
    //       id: '<%- ("icyfenix.cn" + (frontmatter.to.path || window.location.pathname)).slice(-50) %>',
    //       title: '「Comment」<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
    //       body: '<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
    //       distractionFreeMode: false,
    //       pagerDirection: 'last',
    //       // proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
    //       proxy: 'https://zg-cors.herokuapp.com/https://github.com/login/oauth/access_token'
    //     }
    //   }
    // ],
    ['@vuepress/back-to-top'],
    // require('./plugins/read-time'),
    // require('./plugins/export')
  ],
  markdown: {
    anchor: {
      permalink: false
    },
    toc: {
      includeLevel: [2]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-mermaid').default);
      md.use(require('markdown-it-sub'));
      md.use(require('markdown-it-sup'));
      md.use(require('markdown-it-abbr'));
      md.use(require('markdown-it-ins'));
      md.use(require('markdown-it-figure'));
      md.use(require('markdown-it-smartarrows'));
      md.use(require('markdown-it-fontawesome'));
    }
  },
  themeConfig: {
    logo: '/images/logo-color.png',
    lastUpdated: '最后更新',
    smoothScroll: true,
    editLinks: true,
    editLinkText: '在GitHub中编辑',

    // 添加导航栏
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: '代码',
      // 这里是下拉列表展现形式。
      items: [{
        text: '文档工程 Awesome-Fenix',
        link: 'https://github.com/zg/awesome-fenix'
      }, {
        text: '前端工程 Fenix\'s Bookstore',
        link: 'https://github.com/zg/fenix-bookstore-frontend'
      }, {
        text: '前端工程在线示例 Fenix\'s Bookstore',
        link: 'https://bookstore.icyfenix.cn'
      }, {
        text: '后端：单体架构 Spring Boot',
        link: 'https://github.com/zg/monolithic_arch_springboot'
      }, {
        text: '后端：微服务架构 Spring Cloud',
        link: 'https://github.com/zg/microservice_arch_springcloud'
      }, {
        text: '后端：微服务架构 Kubernetes',
        link: 'https://github.com/zg/microservice_arch_kubernetes'
      }, {
        text: '后端：微服务架构 Istio',
        link: 'https://github.com/zg/servicemesh_arch_istio'
      }, {
        text: '后端：无服务架构 AWS Lambda',
        link: 'https://github.com/zg/serverless_arch_awslambda'
      }]
    },
    {
      text: 'PDF下载',
      link: 'https://raw.githubusercontent.com/zg/awesome-fenix/gh-pages/pdf/the-fenix-project.pdf',
      target: "_blank"
    },
    {
      text: '讨论区',
      link: '/board/',
      target: "_self"
    }
    ],
    sidebar: [{
      title: '目录',
      collapsable: false,
      path: '/SUMMARY.md'
    },
    {
      title: '前言',
      collapsable: false,
      children: [
        '/introduction/about-me',
        '/introduction/about-book',
        '/introduction/about-the-fenix-project',
      ]
    },
    {
      title: '探索起步',
      collapsable: false,
      children: [{
        title: '阅读指引',
        collapsable: false,
        children: [
          '/CHANGELOG.md',
          '/exploration/guide/quick-start',
        ]
      }
      ]
    },
    {
      title: 'java高级',
      collapsable: true,
      path: '/documents/02_java/java-knowledge',
      children: [
        '/documents/02_java/jvm/jvm-optimize',
        '/documents/02_java/04_JavaRuntimeDataArea_InstructionSet',
        '/documents/02_java/05_GC and Tuning'
      ]
    },
    {
      title: '基石',
      collapsable: false,
      children: [
      ]
    },
    {
      title: '工具',
      collapsable: true,
      children: [
        {path: '/documents/03_tools/git_skill', title: 'Git实现原理与实践'}
      ]
    },
    ]
  }
};
