# 电子书技巧汇总

将markdown文档，转化为在线的电子书

## 整体思路

- 在vuepress框架工程中编写markdonw文档；
- 使用GitHub进行版本管理；
- 在GitHub中集成Travis-CI提供的持续集成服务将vuepress工程编译为静态页面；
- 将静态页面由GitHub Pages提供存储空间；

1.使用markdown进行文档编写，并提交到GitHub上;

2.由GitHub Pages 提供网站存储空间；由Travis-CI 提供的持续集成服务实时把Git仓库的Markdown文档编译同步至网站，并推送至CDN，提供国内的访问加速；

## 工具

### vuepree

### github

### GitHub Pages

### Travis-CI

## 1. MarkDown使用

### 1.1. 行高亮处理

- 行数范围： {5-8}
- 多个单行： {4,7,9}
- 组合： {4,7-13,16,23-27,40}

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

### 1.2. Markdown中使用Vue

``` javascript
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>
```

- 具体效果
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

## 2. github国内加速

- 找到github相关域名对于IP,同时找到耗时最小的IP
  [DNS查询](https://tool.chinaz.com/dns)
  
- 将IP域名映射添加到本地hosts文件中
  `C:\Windows\System32\drivers\etc`

> 对于要经常访问的网站，我们可以通过在hosts中配置域名和IP的映射关系，提高域名解析速度。由于有了映射关系，当我们输入域名计算机就能很快解析出IP，而不用请求网络上的DNS服务器

``` java
# GitHub Start
20.205.243.166 github.com
66.220.149.32 github.global.ssl.fastly.net
185.199.110.154 github.githubassets.com
# GitHub End
```

- 刷新本地DNS

```shell
ipconfig/flushdns
```

## 3. VSCode技巧

## 4. 参考资料

- <https://www.travis-ci.com/>
