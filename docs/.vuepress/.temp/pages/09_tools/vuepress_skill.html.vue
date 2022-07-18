<template><div><nav class="table-of-contents"><ul><li><router-link to="#二级标题">二级标题</router-link></li><li><router-link to="#行高亮处理">行高亮处理</router-link></li><li><router-link to="#在-markdown-中使用-vue">在 Markdown 中使用 Vue</router-link></li></ul></nav>
<p>生成目录</p>
<h1 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题" aria-hidden="true">#</a> 一级标题</h1>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题" aria-hidden="true">#</a> 二级标题</h2>
<h1 id="一级标题-1" tabindex="-1"><a class="header-anchor" href="#一级标题-1" aria-hidden="true">#</a> 一级标题</h1>
<h2 id="行高亮处理" tabindex="-1"><a class="header-anchor" href="#行高亮处理" aria-hidden="true">#</a> 行高亮处理</h2>
<ul>
<li>行数范围： {5-8}</li>
<li>多个单行： {4,7,9}</li>
<li>组合： {4,7-13,16,23-27,40}</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-markdown-中使用-vue" tabindex="-1"><a class="header-anchor" href="#在-markdown-中使用-vue" aria-hidden="true">#</a> 在 Markdown 中使用 Vue</h2>
<p>一加一等于： {{ 1 + 1 }}</p>
<p><span v-for="i in 3"> span: {{ i }} </span></p>
<p>这是默认主题内置的 <code v-pre>&lt;Badge /&gt;</code> 组件 <Badge text="演示" /></p>
</div></template>
