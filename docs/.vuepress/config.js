const { defaultTheme } = require('vuepress')

module.exports = {
  base: '/zgdoc_management2/',
  lang: 'zh-CN',
  title: '攀岩飞鱼技术体系',
  description: '构建程序员个人全栈知识体系',

  theme: defaultTheme({

    logo: '/images/logo.png',
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '体系分组',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: '',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
    sidebar: [
      { text: '首页', link: '/', collapsible: true, },
      { text: 'Java体系', link: "/01_java/", collapsible: true, children: ['/01_java/java_oom.md',] },
      { text: '架构', link: "/06_architecture/", collapsible: true, children: ['/06_architecture/LowCode.md',] },
      { text: '产品', link: "/05_product/", collapsible: true, children: ['/05_product/鸿蒙教育产品规划.md',] },
      { text: '工具集合', link: "/09_tools/", collapsible: true, children: ['/09_tools/git_skill.md',] },
    ],
    sidebarDepth: 2,
  }),
}