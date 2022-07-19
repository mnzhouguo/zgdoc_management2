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

- <https://www.travis-ci.com/>
