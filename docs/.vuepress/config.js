const { defaultTheme } = require('vuepress')

module.exports = {
  base:'/zgdoc_management',
  lang: 'zh-CN',
  title: '攀岩飞鱼技术体系',
  description: '构建程序员个人全栈知识体系',
  sidebarDepth: 3,
  
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
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],

    sidebar: [
      // SidebarItem
      {
        text: 'Java体系',
        link: '/01_java/jvm/',
        //collapsible: true,
        children: [
          // SidebarItem
          {
            text: 'Java性能优化与实践',
            link: '/01_java/jvm/',
            sidebarDepth:2
          },
        ],
      },

      {
        text: 'AI相关',
        children: [
          // SidebarItem
          {
            text: 'AI基础知识',
            link: '/09_AI/ai_base/',
          },
        ],
      },

      {
        text: '工具',
        children: [
          // SidebarItem
          {
            text: 'Git原理及实践',
            link: '/03_tools/git_skill/',
          },
        ],
      },

      
    ],
  }),
}