<template><div><nav class="table-of-contents"><ul><li><router-link to="#二级标签">二级标签</router-link></li><li><router-link to="#二级标签-1">二级标签</router-link><ul><li><router-link to="#三级标签">三级标签</router-link></li></ul></li></ul></nav>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h1>
<p>大家好</p>
<h2 id="二级标签" tabindex="-1"><a class="header-anchor" href="#二级标签" aria-hidden="true">#</a> 二级标签</h2>
<h2 id="二级标签-1" tabindex="-1"><a class="header-anchor" href="#二级标签-1" aria-hidden="true">#</a> 二级标签</h2>
<h3 id="三级标签" tabindex="-1"><a class="header-anchor" href="#三级标签" aria-hidden="true">#</a> 三级标签</h3>
<p><strong>下面是Vue语法</strong></p>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<p><strong>默认组件</strong></p>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" /></p>
<p><img src="@source/01_java/images/data-model-1.png" alt="图片"></p>
</div></template>
