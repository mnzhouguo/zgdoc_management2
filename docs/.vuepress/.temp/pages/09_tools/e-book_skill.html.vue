<template><div><p>将markdown文档，转化为在线的电子书</p>
<h2 id="整体思路" tabindex="-1"><a class="header-anchor" href="#整体思路" aria-hidden="true">#</a> 整体思路：</h2>
<ul>
<li>在vuepress框架工程中编写markdonw文档；</li>
<li>使用GitHub进行版本管理；</li>
<li>在GitHub中集成Travis-CI提供的持续集成服务将vuepress工程编译为静态页面；</li>
<li>将静态页面由GitHub Pages提供存储空间；</li>
</ul>
<p>1.使用markdown进行文档编写，并提交到GitHub上;</p>
<p>2.由GitHub Pages 提供网站存储空间；由Travis-CI 提供的持续集成服务实时把Git仓库的Markdown文档编译同步至网站，并推送至CDN，提供国内的访问加速；</p>
<h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
<h3 id="vuepree" tabindex="-1"><a class="header-anchor" href="#vuepree" aria-hidden="true">#</a> vuepree</h3>
<h3 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> github</h3>
<h3 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h3>
<h3 id="travis-ci" tabindex="-1"><a class="header-anchor" href="#travis-ci" aria-hidden="true">#</a> Travis-CI</h3>
<ul>
<li>https://www.travis-ci.com/</li>
</ul>
</div></template>
