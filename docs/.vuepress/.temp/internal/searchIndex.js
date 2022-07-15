export const searchIndex = [
  {
    "title": "Hello VuePress",
    "headers": [
      {
        "level": 2,
        "title": "1. 概述",
        "slug": "_1-概述",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 核心概念",
        "slug": "_2-核心概念",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 底层原理",
        "slug": "_3-底层原理",
        "children": [
          {
            "level": 3,
            "title": "3.1. 目录结构",
            "slug": "_3-1-目录结构",
            "children": []
          },
          {
            "level": 3,
            "title": "3.2. 状态模型",
            "slug": "_3-2-状态模型",
            "children": []
          },
          {
            "level": 3,
            "title": "3.3. 存储模型",
            "slug": "_3-3-存储模型",
            "children": []
          },
          {
            "level": 3,
            "title": "3.4. 分支管理",
            "slug": "_3-4-分支管理",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. 使用实践",
        "slug": "_4-使用实践",
        "children": [
          {
            "level": 3,
            "title": "4.1. git安装与配置",
            "slug": "_4-1-git安装与配置",
            "children": []
          },
          {
            "level": 3,
            "title": "4.2. SSH远程访问",
            "slug": "_4-2-ssh远程访问",
            "children": []
          },
          {
            "level": 3,
            "title": "4.3. 远程仓库clone到本地",
            "slug": "_4-3-远程仓库clone到本地",
            "children": []
          },
          {
            "level": 3,
            "title": "4.4. 本地仓库提交到GitHub",
            "slug": "_4-4-本地仓库提交到github",
            "children": []
          },
          {
            "level": 3,
            "title": "4.5. 常用命令",
            "slug": "_4-5-常用命令",
            "children": []
          },
          {
            "level": 3,
            "title": "4.6. 获取远程更新",
            "slug": "_4-6-获取远程更新",
            "children": []
          },
          {
            "level": 3,
            "title": "4.7. 基于master创建新分支",
            "slug": "_4-7-基于master创建新分支",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5. 常见问题",
        "slug": "_5-常见问题",
        "children": [
          {
            "level": 3,
            "title": "5.1. git Failed to connect to github.com port 443",
            "slug": "_5-1-git-failed-to-connect-to-github-com-port-443",
            "children": []
          },
          {
            "level": 3,
            "title": "5.2. error: src refspec main does not match any",
            "slug": "_5-2-error-src-refspec-main-does-not-match-any",
            "children": []
          },
          {
            "level": 3,
            "title": "5.3. error: failed to push some refs to",
            "slug": "_5-3-error-failed-to-push-some-refs-to",
            "children": []
          },
          {
            "level": 3,
            "title": "5.4. OpenSSL SSL_read: Connection was reset, errno 10054",
            "slug": "_5-4-openssl-ssl-read-connection-was-reset-errno-10054",
            "children": []
          },
          {
            "level": 3,
            "title": "5.5. fatal: Couldn't find remote ref master",
            "slug": "_5-5-fatal-couldn-t-find-remote-ref-master",
            "children": []
          },
          {
            "level": 3,
            "title": "Another git process seems to be running in this repository",
            "slug": "another-git-process-seems-to-be-running-in-this-repository",
            "children": []
          }
        ]
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "这是页面级标题",
    "headers": [
      {
        "level": 2,
        "title": "一级标题",
        "slug": "一级标题",
        "children": []
      }
    ],
    "path": "/01_java/jvm.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "一级标题",
        "slug": "一级标题",
        "children": []
      }
    ],
    "path": "/09_tools/git_skill.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
