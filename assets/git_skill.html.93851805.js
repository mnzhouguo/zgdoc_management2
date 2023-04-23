import{_ as l,o as d,c,a as e,b as s,w as i,d as o,e as n,r}from"./app.95d85b91.js";const u={},h=e("p",null,[e("strong",null,"\u76EE\u5F55\u7ED3\u6784")],-1),p={class:"table-of-contents"},g=n("1. \u6982\u8FF0"),m=n("2. \u6838\u5FC3\u6982\u5FF5"),b=n("3. \u5E95\u5C42\u539F\u7406"),_=n("3.1. \u76EE\u5F55\u7ED3\u6784"),v=n("3.2. \u72B6\u6001\u6A21\u578B"),f=n("3.3. \u5B58\u50A8\u6A21\u578B"),k=n("3.4. \u5206\u652F\u7BA1\u7406"),x=n("4. \u4F7F\u7528\u5B9E\u8DF5"),q=n("4.1. git\u5B89\u88C5\u4E0E\u914D\u7F6E"),G=n("4.2. SSH\u8FDC\u7A0B\u8BBF\u95EE"),y=n("4.3. \u8FDC\u7A0B\u4ED3\u5E93clone\u5230\u672C\u5730"),S=n("4.4. \u672C\u5730\u4ED3\u5E93\u63D0\u4EA4\u5230GitHub"),w=n("4.5. \u5E38\u7528\u547D\u4EE4"),A=n("4.6. \u83B7\u53D6\u8FDC\u7A0B\u66F4\u65B0"),H=n("4.7. \u57FA\u4E8Emaster\u521B\u5EFA\u65B0\u5206\u652F"),E=n("5. \u5E38\u89C1\u95EE\u9898"),L=n("5.1. git Failed to connect to github.com port 443"),B=n("5.2. error: src refspec main does not match any"),C=n("5.3. error: failed to push some refs to"),j=n("5.4. OpenSSL SSL_read: Connection was reset, errno 10054"),z=n("5.5. fatal: Couldn't find remote ref master"),M=n("5.6. Another git process seems to be running in this repository"),V=n("6. \u53C2\u8003\u6587\u6863"),D=o(`<h1 id="git\u539F\u7406\u4E0E\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#git\u539F\u7406\u4E0E\u5B9E\u8DF5" aria-hidden="true">#</a> Git\u539F\u7406\u4E0E\u5B9E\u8DF5</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><p>Git\u4F5C\u4E3A\u4E00\u4E2A\u7248\u672C\u7BA1\u7406\u5DE5\u5177\uFF0C\u6211\u4EEC\u53EA\u8981\u542C\u5230\u5B83\u662F\u7531Linus Torvalds(Linux\u5185\u6838\u7684\u6700\u65E9\u4F5C\u8005)\u5F00\u53D1\u8BBE\u8BA1\u7684\uFF0C\u5C31\u5BF9\u5B83\u8083\u7136\u8D77\u656C\u4E86\uFF0C\u5728\u540C\u7C7B\u5DE5\u5177\u4E2D\u7B97\u662F\u4E00\u9A91\u7EDD\u5C18\uFF0CGit\u51ED\u501F\u7740\u4F18\u96C5\u7684\u8BBE\u8BA1\u3001\u4E30\u5BCC\u7684\u529F\u80FD\u3001\u7B80\u5355\u7684\u64CD\u4F5C\uFF0C\u6781\u9AD8\u7684\u6027\u80FD\uFF0C\u529B\u538B\u5176\u4ED6\u5DE5\u5177\u6210\u4E3A\u5E02\u573A\u5360\u6709\u7387\u6700\u9AD8\u7684\u5DE5\u5177\uFF0C\u4E5F\u662F\u7A0B\u5E8F\u5458\u7FA4\u4F53\u5FC5\u5907\u7684\u3001\u4F7F\u7528\u6700\u9891\u7E41\u7684\u5DE5\u5177\uFF1B</p><p>\u4F46\u662F\uFF0C\u5BF9\u4E8E\u5927\u90E8\u5206\u7A0B\u5E8F\u5458\uFF0C\u5E73\u65F6\u7684\u4F7F\u7528\u573A\u666F\u53EF\u80FD\u90FD\u53EA\u662F\u5728\u5404\u4E2A\u63D2\u4EF6\u4E4B\u4E0A\uFF0C\u8FDB\u884C\u7B80\u5355\u7684\u63D0\u4EA4\uFF0C\u5408\u5E76\u7B49\u64CD\u4F5C\u3002\u800C\u5BF9\u4E8E\u521D\u5B66\u7740\u4F1A\u5BF9git\u7684\u547D\u4EE4\u611F\u5230\u56F0\u60D1\uFF0C\u4E00\u822C\u4F7F\u7528\u6B7B\u8BB0\u786C\u80CC\u7684\u65B9\u5F0F\u53BB\u5B66\u4E60\uFF0C\u8FD9\u6837\u5BFC\u81F4\u4E00\u65E6\u957F\u65F6\u95F4\u4E0D\u7528\u5C31\u4F1A\u5FD8\u8BB0\uFF0C\u6216\u8005\u51FA\u73B0\u4E00\u4E9B\u5F02\u5E38\u60C5\u51B5\u5C31\u4E0D\u77E5\u9053\u5982\u4F55\u5904\u7406\u3002 \u7A76\u5176\u539F\u56E0\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u5BF9Git\u7684\u5E95\u5C42\u539F\u7406\u4E0E\u8BBE\u8BA1\u4E0D\u4E86\u89E3\uFF0C\u8FD9\u597D\u6BD4\uFF1A\u4E0D\u4E86JVM\u7684\u539F\u7406\u8FDB\u884C\u865A\u62DF\u673A\u8C03\u4F18\uFF0C\u4E0D\u4E86\u89E3myslq\u7D22\u5F15\u7684\u539F\u7406\u8FDB\u884C\u7D22\u5F15\u4F18\u5316\u4E00\u6837\uFF1B</p><p>\u56E0\u6B64\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u6211\u4EEC\u4ECEGit\u7684\u4E00\u4E9B\u6838\u5FC3\u6982\u5FF5\u4E0E\u5E95\u5C42\u539F\u7406\u53D1\u51FA\uFF0C\u5E26\u9886\u5927\u5BB6\u5BF9Git\u6709\u4E00\u4E2A\u6DF1\u5165\u7684\u3001\u5168\u9762\u7684\u4E86\u89E3\uFF0C\u7136\u540E\u518D\u9488\u5BF9\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u6700\u9891\u7E41\u7684\u64CD\u4F5C\u505A\u4E00\u4E9B\u603B\u7ED3\uFF0C\u6700\u540E\u6211\u4EEC\u4F1A\u9488\u5BF9Git\u7684\u4E00\u4E9B\u9AD8\u7EA7\u3001\u540C\u65F6\u5BF9\u6548\u7387\u6709\u6781\u5927\u63D0\u5347\u7684\u529F\u80FD\u8FDB\u884C\u8BF4\u660E\uFF0C\u5E0C\u671B\u901A\u8FC7\u8FD9\u7BC7\u6587\u7AE0\u8BA9\u5927\u5BB6\u5BF9Git\u4ECE\u91CC\u5230\u5916\u3001\u4ECE\u539F\u7406\u5230\u5B9E\u8DF5\u6709\u4E00\u4E2A\u5168\u9762\u7684\u8BA4\u8BC6\uFF0C\u6700\u7EC8\u662F\u63D0\u9AD8\u6211\u4EEC\u7684\u7814\u53D1\u6548\u80FD\uFF1B</p><h2 id="_2-\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 2. \u6838\u5FC3\u6982\u5FF5</h2><ul><li><p>Git\u5728\u672C\u673A\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E4B\u4E0A\u6784\u5EFA\u4E00\u4E2A\u5C0F\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002\u8FD9\u4E2A\u5C0F\u578B\u7684\u6587\u4EF6\u7CFB\u7EDF\u5C31\u662F <strong>.git/objects</strong>\u76EE\u5F55\uFF1B</p></li><li><p>Git\u4E2D\u7684\u6240\u6709\u64CD\u4F5C\uFF0C\u90FD\u662F\u901A\u8FC7\u5185\u90E8\u5B9A\u4E49\u76844\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61\u6765\u5B9E\u73B0\uFF08&quot; <strong>blob</strong>&quot;\u3001&quot; <strong>tree</strong>&quot;\u3001 &quot; <strong>commit</strong>&quot; \u548C&quot; <strong>tag</strong>&quot;\uFF09</p></li><li><p>Git\u8BB0\u5F55\u4E86\u6BCF\u6B21\u63D0\u4EA4\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u7684\u5168\u90E8\u5185\u5BB9\uFF08snapshot\u5FEB\u7167\uFF09\uFF1B</p></li></ul><h2 id="_3-\u5E95\u5C42\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u5E95\u5C42\u539F\u7406" aria-hidden="true">#</a> 3. \u5E95\u5C42\u539F\u7406</h2><h3 id="_3-1-\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-1-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 3.1. \u76EE\u5F55\u7ED3\u6784</h3><p>\u4E00\u4E2A\u88ABgit\u7BA1\u7406\u7684\u9879\u76EE\uFF0C\u5728\u672C\u5730\u7684\u6587\u4EF6\u5939\u76EE\u5F55\u4E0B\uFF0C\u4F1A\u6709\u4E00\u4E2A\u56FA\u5B9A\u7684\u76EE\u5F55\u683C\u5F0F\uFF0C\u6211\u4EEC\u5148\u4ECE\u8FD9\u4E2A\u76EE\u5F55\u7ED3\u6784\u8BF4\u8D77\uFF0C\u6574\u4E2A\u6587\u4EF6\u5939\u4E3A<em><strong>\u5DE5\u4F5C\u76EE\u5F55</strong></em>\uFF0C.git\u6587\u4EF6\u5939\u4E3A<strong>Git\u76EE\u5F55</strong>\uFF0CGit\u6587\u4EF6\u4E4B\u5916\u7684<strong>\u5DE5\u4F5C\u76EE\u5F55</strong>\uFF1B\u5982\u4E0B\u56FE\u6240\u793A\uFF1B</p><ul><li><strong>Git\u76EE\u5F55</strong></li></ul><p>Git\u76EE\u5F55\u662F\u9879\u76EE\u5B58\u50A8\u6240\u6709\u5386\u53F2\u548C\u5143\u4FE1\u606F\u7684\u76EE\u5F55 - \u5305\u62EC\u6240\u6709\u7684\u5BF9\u8C61(<em><strong>commits,trees,blobs,tags</strong></em>)\uFF0C\u6BCF\u4E00\u4E2A\u9879\u76EE\u53EA\u80FD\u6709\u4E00\u4E2A&#39;Git\u76EE\u5F55\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u5177\u4F53\u770B\u770BGit\u76EE\u5F55\u4E2D\u6709\u54EA\u4E9B\u4FE1\u606F\uFF1B</p><blockquote><p>Git\u76EE\u5F55\u4E2D\u67095\u4E2A\u6838\u5FC3\u6587\u4EF6\u65E2\u6587\u4EF6\u5939\uFF0Cconfig\uFF0Cobjects\uFF0CHEAD\uFF0Cindex\uFF0Crefs \uFF1B</p></blockquote><ul><li><p><strong>config</strong>\uFF1A</p><p>\u5B58\u50A8\u9879\u76EE\u914D\u7F6E\u4FE1\u606F\uFF0C\u6BD4\u5982\u662F\u5426\u4EE5 bare \u65B9\u5F0F\u521D\u59CB\u5316\uFF0Cremote \u4FE1\u606F\uFF0Cgit remote add \u6DFB\u52A0\u7684\u8FDC\u7A0B\u5206\u652F\u4FE1\u606F\u7B49\u7B49\uFF1B</p></li><li><p><strong>objects</strong>\uFF1A</p></li></ul><blockquote><p>\u4FDD\u5B58git\u5BF9\u8C61\uFF0Cgit\u4E2D\u7684\u64CD\u4F5C\u4EE5\u53CA\u6587\u4EF6\u90FD\u4F1A\u4EE5 git \u5BF9\u8C61\u5F62\u5F0F\u4FDD\u5B58\u81F3\u6B64\uFF0Cgit \u5BF9\u8C61\u5206\u4E3A <strong>blobs\uFF0Ctree\uFF0Ccommit</strong> \u4E09\u79CD\u7C7B\u578B\uFF0C\u6BD4\u5982 git commit \u5C31\u662F commit \u7C7B\u578B\u53D8\u91CF\uFF0C\u5404\u4E2A\u7248\u672C\u4E4B\u95F4\u901A\u8FC7\u7248\u672C\u6811\u8FDB\u884C\u7EC4\u7EC7\uFF0C\u6BD4\u5982 HEAD \u6307\u5411\u67D0\u4E2A commit \u5BF9\u8C61\uFF0C\u800C commit \u5BF9\u8C61\u53C8\u4F1A\u6307\u5411\u51E0\u4E2A BLOB \u5BF9\u8C61\u6216\u8005 tree \u5BF9\u8C61\u3002objects \u6587\u4EF6\u5939\u4E2D\u6709\u5F88\u591A\u5B50\u6587\u4EF6\u5939\uFF0C\u5176\u4E2D git \u5BF9\u8C61\u4FDD\u5B58\u5728\u4EE5\u5176 sha-1 \u503C\u7684\u524D\u4E24\u4F4D\u4E3A\u5B50\u6587\u4EF6\u5939\u540E 38 \u4F4D\u4E3A\u6587\u4EF6\u540D\u7684\u6587\u4EF6\u4E2D\uFF0C\u6B64\u5916 git \u4E3A\u4E86\u8282\u7701\u5B58\u50A8\u5BF9\u8C61\u6240\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4\uFF0C\u4F1A\u5B9A\u671F\u5BF9 git \u5BF9\u8C61\u8FDB\u884C\u538B\u7F29\u548C\u6253\u5305\uFF0C\u5176\u4E2D pack \u6587\u4EF6\u5939\u7528\u4E8E\u5B58\u653E\u6253\u5305\u538B\u7F29\u7684\u5BF9\u8C61\uFF0Cinfo \u6587\u4EF6\u5939\u7528\u4E8E\u4ECE\u6253\u5305\u7684\u6587\u4EF6\u4E2D\u67E5\u627E git \u5BF9\u8C61\uFF1B</p></blockquote><ul><li><p><strong>HEAD</strong>\uFF1A \u8BE5\u6587\u4EF6\u6307\u660E\u4E86\u672C\u5730\u7684\u5206\u652F\u7ED3\u679C\uFF0C\u5982\u672C\u5730\u5206\u652F\u662F master\uFF0C\u90A3\u4E48 HEAD \u5C31\u6307\u5411 master\uFF0C\u5206\u652F\u5728 refs \u4E2D\u5C31\u4F1A\u8868\u793A\u6210<code>refs:refs/heads/master</code></p></li><li><p><strong>index</strong>\uFF1A \u8BE5\u6587\u4EF6 stage \u6682\u5B58\u533A\u4FE1\u606F\uFF0C\u4E5F\u5C31\u662F add \u4E4B\u540E\u4FDD\u5B58\u5230\u7684\u533A\u57DF\uFF0C\u5185\u5BB9\u5305\u62EC\u5B83\u6307\u5411\u7684\u6587\u4EF6\u7684\u65F6\u95F4\u6233;</p></li><li><p><strong>refs</strong>\uFF1A refs\u76EE\u5F55\u4E0B\u9762\u662F\u4E00\u4E9B\u7EAF\u6587\u672C\u6587\u4EF6\uFF0C\u5206\u522B\u8BB0\u5F55\u7740\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u7684<em><strong>SHA</strong></em>\u54C8\u5E0C\u503C\u3002\u6587\u4EF6\u7684\u6570\u91CF\u53D6\u51B3\u4E8E\u5206\u652F\u7684\u6570\u91CF</p></li><li><p><strong>hooks</strong>\uFF1A \u8FD9\u91CC\u4E3B\u8981\u5B9A\u4E49\u4E86\u5BA2\u6237\u7AEF\u6216\u670D\u52A1\u7AEF\u7684 hook \u811A\u672C\uFF0C\u8FD9\u4E9B\u811A\u672C\u7528\u4E8E\u5728\u7279\u5B9A\u547D\u4EE4\u548C\u64CD\u4F5C\u4E4B\u524D\u3001\u4E4B\u540E\u8FDB\u884C\u7279\u6B8A\u5904\u7406</p></li><li><p><strong>description</strong> \uFF1A\u4EC5\u4F9B GitWeb \u7A0B\u5E8F\u4F7F\u7528</p></li><li><p><strong>logs</strong>\uFF1A \u8BB0\u5F55\u4E86\u672C\u5730\u4ED3\u5E93\u548C\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6BCF\u4E00\u4E2A\u5206\u652F\u7684\u63D0\u4EA4\u4FE1\u606F\uFF0C\u5373\u6240\u6709 commit \u5BF9\u8C61\u90FD\u4F1A\u88AB\u8BB0\u5F55\u5728\u6B64\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u5185\u5BB9\u5E94\u8BE5\u662F\u6211\u4EEC\u67E5\u770B\u6700\u9891\u7E41\u7684\uFF0C\u5982 git log</p></li><li><p><strong>info</strong>\uFF1A \u5176\u4E2D\u4FDD\u5B58\u4E86\u4E00\u4EFD\u4E0D\u5E0C\u671B\u5728 .gitignore \u6587\u4EF6\u4E2D\u7BA1\u7406\u7684\u5FFD\u7565\u7684\u5168\u5C40\u53EF\u6267\u884C\u6587\u4EF6</p></li><li><p><strong>COMMIT_EDITMSG</strong>\uFF1A \u8BB0\u5F55\u4E86\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u65F6\u7684\u6CE8\u91CA\u4FE1\u606F</p></li></ul><h3 id="_3-2-\u72B6\u6001\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u72B6\u6001\u6A21\u578B" aria-hidden="true">#</a> 3.2. \u72B6\u6001\u6A21\u578B</h3><p>\u4E0B\u56FE\u63CF\u8FF0\u4E86 git \u5BF9\u8C61\u7684\u5728\u4E0D\u540C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4E0D\u540C\u7684\u5B58\u50A8\u4F4D\u7F6E\uFF0C\u901A\u8FC7\u4E0D\u540C\u7684 git \u547D\u4EE4\u6539\u53D8 git \u5BF9\u8C61\u7684\u5B58\u50A8\u751F\u547D\u5468\u671F</p><p><strong>\u5DE5\u4F5C\u533A (workspace)</strong> \u5C31\u662F\u6211\u4EEC\u5F53\u524D\u5DE5\u4F5C\u7A7A\u95F4\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5F53\u524D\u80FD\u5728\u672C\u5730\u6587\u4EF6\u5939\u4E0B\u9762\u770B\u5230\u7684\u6587\u4EF6\u7ED3\u6784\u3002\u521D\u59CB\u5316\u5DE5\u4F5C\u7A7A\u95F4\u6216\u8005\u5DE5\u4F5C\u7A7A\u95F4 clean \u7684\u65F6\u5019\uFF0C\u6587\u4EF6\u5185\u5BB9\u548C index \u6682\u5B58\u533A\u662F\u4E00\u81F4\u7684\uFF0C\u968F\u7740\u4FEE\u6539\uFF0C\u5DE5\u4F5C\u533A\u6587\u4EF6\u5728\u6CA1\u6709 add \u5230\u6682\u5B58\u533A\u65F6\u5019\uFF0C\u5DE5\u4F5C\u533A\u5C06\u548C\u6682\u5B58\u533A\u662F\u4E0D\u4E00\u81F4\u7684\uFF1B</p><p><strong>\u6682\u5B58\u533A (index)</strong> \u8001\u7248\u672C\u6982\u5FF5\u4E5F\u53EB Cache \u533A\uFF0C\u5C31\u662F\u6587\u4EF6\u6682\u65F6\u5B58\u653E\u7684\u5730\u65B9\uFF0C\u6240\u6709\u6682\u65F6\u5B58\u653E\u5728\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u5C06\u968F\u7740\u4E00\u4E2A commit \u4E00\u8D77\u63D0\u4EA4\u5230 local repository \u6B64\u65F6 local repository \u91CC\u9762\u6587\u4EF6\u5C06\u5B8C\u5168\u88AB\u6682\u5B58\u533A\u6240\u53D6\u4EE3\u3002\u6682\u5B58\u533A\u662F git \u67B6\u6784\u8BBE\u8BA1\u4E2D\u975E\u5E38\u91CD\u8981\u548C\u96BE\u7406\u89E3\u7684\u4E00\u90E8\u5206\uFF1B</p><p><strong>\u672C\u5730\u4ED3\u5E93 (local repository)</strong> git \u662F\u5206\u5E03\u5F0F\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\uFF0C\u548C\u5176\u4ED6\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u4E0D\u540C\u7684\u662F\u4ED6\u53EF\u4EE5\u5B8C\u5168\u53BB\u4E2D\u5FC3\u5316\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u4E0D\u7528\u548C\u4E2D\u592E\u670D\u52A1\u5668 (remote server) \u8FDB\u884C\u901A\u4FE1\uFF0C\u5728\u672C\u5730\u5373\u53EF\u8FDB\u884C\u5168\u90E8\u79BB\u7EBF\u64CD\u4F5C\uFF0C\u5305\u62EC log\uFF0Chistory\uFF0Ccommit\uFF0Cdiff \u7B49\u7B49\u3002\u5B8C\u6210\u79BB\u7EBF\u64CD\u4F5C\u6700\u6838\u5FC3\u662F\u56E0\u4E3A git \u6709\u4E00\u4E2A\u51E0\u4E4E\u548C\u8FDC\u7A0B\u4E00\u6837\u7684\u672C\u5730\u4ED3\u5E93\uFF0C\u6240\u6709\u672C\u5730\u79BB\u7EBF\u64CD\u4F5C\u90FD\u53EF\u4EE5\u5728\u672C\u5730\u5B8C\u6210\uFF0C\u7B49\u9700\u8981\u7684\u65F6\u5019\u518D\u53EF\u4EE5\u4E0E\u8FDC\u7A0B\u8FDB\u884C\u540C\u6B65\uFF0C\u672C\u5730\u4ED3\u5E93\u90FD\u5B58\u50A8\u5728<strong>git\u4E0B\u9762\u7684object\u6587\u4EF6</strong>\u5939\u4E0B\u3002</p><p><strong>\u8FDC\u7A0B\u4ED3\u5E93 (remote repository)</strong> \u4E2D\u5FC3\u5316\u4ED3\u5E93\uFF0C\u6240\u6709\u4EBA\u5171\u4EAB\uFF0C\u672C\u5730\u4ED3\u5E93\u4F1A\u9700\u8981\u548C\u8FDC\u7A0B\u4ED3\u5E93\u8FDB\u884C\u4EA4\u4E92\uFF0C\u4E5F\u5C31\u80FD\u5C06\u5176\u4ED6\u6240\u6709\u4EBA\u5185\u5BB9\u66F4\u65B0\u5230\u672C\u5730\u4ED3\u5E93\u628A\u81EA\u5DF1\u5185\u5BB9\u4E0A\u4F20\u5206\u4EAB\u7ED9\u5176\u4ED6\u4EBA\u3002\u7ED3\u6784\u5927\u4F53\u548C\u672C\u5730\u4ED3\u5E93\u4E00\u6837\u3002</p><h3 id="_3-3-\u5B58\u50A8\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5B58\u50A8\u6A21\u578B" aria-hidden="true">#</a> 3.3. \u5B58\u50A8\u6A21\u578B</h3><blockquote><p><strong>\u6587\u4EF6\u5185\u5BB9\u5230SHA\u7684\u6620\u5C04</strong>, Git\u4E2D\u7684\u4E00\u4E2A\u5173\u952E\u6838\u5FC3\u5C31\u662F<strong>\u54C8\u5E0C\u7B97\u6CD5</strong>\uFF0CGit\u901A\u8FC7\u5C06\u5B9E\u9645\u7684\u6587\u4EF6\u5185\u5BB9\u8FDB\u884C\u54C8\u5E0C\u8BA1\u7B97\uFF0C\u56E0\u4E3A\u54C8\u5E0C\u7684\u7279\u70B9\uFF0C\u76F8\u540C\u7684\u5185\u5BB9\u4F1A\u8BA1\u7B97\u51FA\u76F8\u540C\u7684\u54C8\u5E0C\u503C\uFF0C\u4E0D\u540C\u7684\u5185\u5BB9\u8BA1\u7B97\u51FA\u4E0D\u540C\u7684\u54C8\u5E0C\u503C\uFF0CGit\u901A\u8FC7\u6BD4\u8F83\u4E0E\u7BA1\u7406\u6587\u4EF6\u7684\u54C8\u5E0C\u503C\uFF0C\u6765\u5B9E\u73B0\u9AD8\u6548\u3001\u4E0E\u4F4E\u5197\u4F59\uFF1B</p></blockquote><p><strong>Git\u4E2D\u7684\u6240\u6709\u7684\u5B58\u50A8\u5305\u62EC4\u79CD\u7C7B\u578B\u7684\u5BF9\u8C61\uFF08object\uFF09\uFF0Cblob \uFF0Ctree\uFF0Ccommit\uFF0Ctag</strong>\uFF0C\u8FD9\u51E0\u79CD\u5BF9\u8C61\u7684\u903B\u8F91\u5173\u7CFB\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p>**blob\uFF1A**\u5B58\u50A8\u6587\u4EF6\u6570\u636E\uFF0C\u5C31\u662F\u4E00\u4E2A\u6587\u4EF6\uFF1B</p><ul><li><p>\u4E00\u4E2A&quot;blob\u5BF9\u8C61&quot;\u5C31\u662F\u4E00\u5757\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u5B83\u6CA1\u6709\u6307\u5411\u4EFB\u4F55\u4E1C\u897F\u6216\u6709\u4EFB\u4F55\u5176\u5B83\u5C5E\u6027\uFF1B</p></li><li><p>\u88ABGit\u7BA1\u7406\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2Ablob\u6587\u4EF6\uFF1B</p></li><li><p>\u76F8\u540C\u7684\u6587\u4EF6\u5185\u5BB9\uFF0C\u53EA\u4F1A\u5B58\u50A8\u4E00\u4E2Ablob\u5BF9\u8C61\uFF08SHA\u503C\u76F8\u540C\uFF09\uFF1B</p></li></ul><p>**tree\uFF1A**\u53EF\u4EE5\u7406\u89E3\u4E3A\u76EE\u5F55\u6216\u8005\u96C6\u5408\uFF0C\u7528\u6765\u7BA1\u7406tree\u6216\u8005blob\uFF1B</p><ul><li>\u4E00\u4E2Atree\u5BF9\u8C61\u5173\u8054\u8005\u4E00\u4E32(bunch)blob\u5BF9\u8C61\u6216\u662F\u5176\u5B83tree\u5BF9\u8C61\u7684\u6307\u9488;</li><li>tree\u5BF9\u8C61\u5B58\u50A8\u7684\u662F\u6307\u9488\uFF08tree\u548Cblob\u7684SHA\u54C8\u5E0C\u503C\uFF09\u5E76\u4E0D\u5B58\u50A8\u771F\u6B63\u7684\u5BF9\u8C61\u6570\u636E\uFF1B</li></ul><p><strong>commit\uFF1A</strong> \u6807\u8BC6\u67D0\u4E2A\u65F6\u95F4\u70B9\u7684\u72B6\u6001\uFF0C\u5185\u5BB9\u5305\u62EC\uFF1A\u65F6\u95F4\u70B9\u5143\u6570\u636E\uFF0C\u63D0\u4EA4\u4F5C\u8005\u7B49\uFF0C\u4E00\u4E2Acommit\u6307\u5411\u4E00\u4E2Atree\uFF1B</p><blockquote><p>commint\u5BF9\u8C61\u662F\u6211\u4EEC\u63A5\u89E6\u5F97\u6700\u9891\u7E41\u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u4E00\u822C\u4F7F\u7528\u7684commit\u547D\u4EE4\uFF08merge\uFF0Cpull\u3001push\u7B49\u7B49\uFF09\u90FD\u76F4\u63A5\u4E0Ecommit\u5BF9\u8C61\u6253\u4EA4\u9053\uFF1B</p></blockquote><ul><li><p>tree\u5BF9\u8C61\uFF1A \u6807\u8BC6\u8005commit\u5BF9\u8C61\u4E2D\u6D89\u53CA\u7684\u76F8\u5173tree\u5BF9\u8C61\uFF08tree\u5BF9\u8C61\u6700\u7EC8\u5173\u8054\u7740blod\u5BF9\u8C61\uFF0C\u800Cblod\u5BF9\u8C61\u7531\u5B9E\u9645\u6587\u4EF6\u751F\u6210\uFF09\uFF1B</p></li><li><p>parent\uFF1A\u5173\u8054\u7684\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684commit\u5BF9\u8C61\uFF0Ccommit\u5BF9\u8C61\u6700\u7EC8\u53EF\u4EE5\u5B9A\u4F4D\u5230blod\u5BF9\u8C61\uFF0C\u901A\u8FC7blod\u7684SHA1\u503C\u53EF\u4EE5\u786E\u5B9A\u6587\u4EF6\u662F\u5426\u53D8\u5316\uFF1B</p></li></ul><p><strong>tag\uFF1A</strong> tag\u7528\u6765\u6807\u8BB0\u4E00\u4E2A\u63D0\u4EA4\uFF08commit\uFF09\u7684\u65B9\u6CD5\uFF1B\u3001</p><h3 id="_3-4-\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> 3.4. \u5206\u652F\u7BA1\u7406</h3><h2 id="_4-\u4F7F\u7528\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_4-\u4F7F\u7528\u5B9E\u8DF5" aria-hidden="true">#</a> 4. \u4F7F\u7528\u5B9E\u8DF5</h2><h3 id="_4-1-git\u5B89\u88C5\u4E0E\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-1-git\u5B89\u88C5\u4E0E\u914D\u7F6E" aria-hidden="true">#</a> 4.1. git\u5B89\u88C5\u4E0E\u914D\u7F6E</h3><ul><li>\u914D\u7F6Egit\u4FE1\u606F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">git</span> config --global user.name <span class="token string">&quot;zhouguo&quot;</span>
 <span class="token function">git</span> config --global user.email <span class="token punctuation">[</span><span class="token string">&quot;378046832@qq.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>mailto:<span class="token punctuation">\\</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-ssh\u8FDC\u7A0B\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_4-2-ssh\u8FDC\u7A0B\u8BBF\u95EE" aria-hidden="true">#</a> 4.2. SSH\u8FDC\u7A0B\u8BBF\u95EE</h3><p>\u76F8\u5F53\u4E8E\u5728\u67D0\u67D0\u4EBA\u7684github\u4E2D\u6DFB\u52A0\u8FDC\u7A0B\u8FDE\u63A5\u6743\u9650\uFF0C\u8FD9\u91CC\u662F\u5728\u81EA\u5DF1\u7684github\u8D26\u53F7\u4E2D\u6DFB\u52A0\u81EA\u5DF1\u5305\u542B\u672C\u5730\u7684git\u4FE1\u606F\u7684\u5BC6\u94A5\uFF0C\u8BA9\u672C\u5730git\u80FD\u8FDC\u7A0B\u8FDE\u63A5\u5230github\u3002</p><p><strong>\u7B2C\u4E00\u6B65\uFF1A\u4F7F\u7528git bash\u751F\u6210\u79D8\u94A5</strong> \u4F7F\u7528 ssh-keygen -t rsa \u547D\u4EE4\u751F\u6210\u8BC1\u4E66\u6587\u4EF6\u53CA\u5BC6\u94A5(\u4FE1\u606F\u4E2D\u5305\u542B\u4F60\u7684git\u7528\u6237\u548C\u90AE\u7BB1)</p>`,41),F=n("\u7B2C\u4E8C\u6B65\uFF1A\u5C06\u5BC6\u94A5\u52A0\u5230"),I={href:"https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},N=n("github"),O=n("\u7684setting\u4E2DSSH Keys\u4E2D"),T=o(`<h3 id="_4-3-\u8FDC\u7A0B\u4ED3\u5E93clone\u5230\u672C\u5730" tabindex="-1"><a class="header-anchor" href="#_4-3-\u8FDC\u7A0B\u4ED3\u5E93clone\u5230\u672C\u5730" aria-hidden="true">#</a> 4.3. \u8FDC\u7A0B\u4ED3\u5E93clone\u5230\u672C\u5730</h3><ul><li><p>\u5148\u5728\u672C\u5730\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939demo\uFF0C\u4F5C\u4E3A\u672C\u5730\u4EE3\u7801\u4ED3\u5E93\uFF1B</p></li><li><p>\u8FDB\u5165demo\u6587\u4EF6\u5939\u4E0B\uFF0C\u5355\u51FB\u9F20\u6807\u53F3\u952E\uFF0C\u9009\u62E9git bash here\uFF0C\u6253\u5F00git bash\u7EC8\u7AEF\uFF1B</p></li><li><p>\u5728git bash\u7EC8\u7AEF\u8F93\u5165git init\u547D\u4EE4\uFF0C\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">git</span> init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5229\u7528git clone url\u547D\u4EE4\uFF0C\u5C06\u9700\u8981\u7684\u9879\u76EE\u4ECEgithub\u4E0Aclone\u4E0B\u6765\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone  --url \u4E3Agithub\u4E2D\u7684git\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_4-4-\u672C\u5730\u4ED3\u5E93\u63D0\u4EA4\u5230github" tabindex="-1"><a class="header-anchor" href="#_4-4-\u672C\u5730\u4ED3\u5E93\u63D0\u4EA4\u5230github" aria-hidden="true">#</a> 4.4. \u672C\u5730\u4ED3\u5E93\u63D0\u4EA4\u5230GitHub</h3><p>\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\uFF0C\u628A\u4EE3\u7801\u7684\u6587\u4EF6\u5939\u53D8\u6210\u4E00\u4E2A\u4ED3\u5E93\uFF0C\u4F7F\u7528<code>git init</code>\u547D\u4EE4\uFF0C\u5728\u672C\u5730\u6587\u4EF6\u5939\u4E0B\uFF0C\u53F3\u952E\u6253\u5F00git bash\u7EC8\u7AEF\uFF0C\u521D\u59CB\u5316\u5B8C\u6210\u4E4B\u540E\uFF0C\u672C\u5730\u6587\u4EF6\u5939\u4E0B\u4F1A\u751F\u6210.git\u6587\u4EF6\uFF1B</p><ul><li><p>\u6CE8\u610F\uFF1A\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E4B\u524D\uFF0C\u8981\u786E\u4FDD\u5DE5\u4F5C\u533A\u4E2D\u7684\u4EE3\u7801\u63D0\u4EA4\u5230\u4E86\u672C\u5730</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5C06\u4EE3\u7801\u6DFB\u52A0\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u9700\u8981\u5728git\u4E0A\u521B\u5EFA\u4E00\u4E2Arepository</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin --https://github.com/mnzhouguo/zgdoc-technology.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFAmain\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -M main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u63A8\u9001\u4EE3\u7801\u63A8\u9001\u5230\u8FDC\u7A0Bmain\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># </span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/mnzhouguo/zgdoc-technology.git
<span class="token function">git</span> branch -M main
<span class="token function">git</span> push -u origin main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4-5-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-5-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 4.5. \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4FEE\u6539\u7684\u5185\u5BB9</span>
<span class="token function">git</span> status

<span class="token comment"># \u6DFB\u52A0\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">add</span>

<span class="token function">git</span> commit -a -m 

<span class="token function">git</span> restore 
<span class="token comment"># (use &quot;git add/rm ...&quot; to update what will be committed)</span>
<span class="token comment"># (use &quot;git restore ...&quot; to discard changes in working directory)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-\u83B7\u53D6\u8FDC\u7A0B\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_4-6-\u83B7\u53D6\u8FDC\u7A0B\u66F4\u65B0" aria-hidden="true">#</a> 4.6. \u83B7\u53D6\u8FDC\u7A0B\u66F4\u65B0</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u8FDC\u7A0B\u5206\u2F40</span>
$ <span class="token function">git</span> remote -v
<span class="token comment"># \u76F4\u63A5\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u6700\u65B0\u4EE3\u7801\u5E76\u5408\u5E76\u6700\u65B0\u4EE3\u7801\u5230\u672C\u5730\u5F53\u524D\u5206\u652F</span>
$ <span class="token function">git</span> pull origin master    <span class="token variable"><span class="token variable">\`</span>**\u2F70\u4F8B\uFF1A\u62C9\u53D6\u8FDC\u7AEForigin/master\u5206\u2F40\u5408\u5E76\u5230\u672C\u5730\u5F53\u524D\u5206\u2F40**<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-\u57FA\u4E8Emaster\u521B\u5EFA\u65B0\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_4-7-\u57FA\u4E8Emaster\u521B\u5EFA\u65B0\u5206\u652F" aria-hidden="true">#</a> 4.7. \u57FA\u4E8Emaster\u521B\u5EFA\u65B0\u5206\u652F</h3><p>\u5728\u5DF2\u7ECF\u514B\u9686\u4E0B\u6765\u7684\u672C\u5730\u9879\u76EE\u7684\u6587\u4EF6\u5939\u76EE\u5F55\u4E2D\uFF0C\u7A7A\u767D\u5904\uFF0C\u70B9\u51FB\u9F20\u6807\u53F3\u952E\uFF0C\u9009\u62E9Git Bash Here\uFF0C\u6253\u5F00git\u547D\u4EE4\u7A97\u53E3\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u9996\u5148\uFF0C\u8FDB\u5165master\u5206\u652F\uFF1A</span>
<span class="token function">git</span> checkout master

<span class="token comment"># 2. \u62C9\u53D6master\u6700\u65B0\u9879\u76EE\u5230\u672C\u5730master\u5206\u652F\uFF1A</span>
<span class="token function">git</span> pull

<span class="token comment"># 3. \u521B\u5EFA\u65B0\u5206\u652Fdev\uFF0C\u5E76\u628A\u5F53\u524Dmaster\u5206\u652F\u5185\u5BB9\u590D\u5236\u4E00\u4EFD\u5230\u65B0\u5206\u652Fdev\u4E2D\uFF1A</span>
<span class="token function">git</span> checkout -b dev

<span class="token comment"># 4. \u628A\u65B0\u5EFA\u5206\u652Fdev\u63A8\u9001\u5230\u8FDC\u7AEF\uFF1A</span>
<span class="token function">git</span> push origin dev

<span class="token comment"># 5. \u5C06\u8FDC\u7AEF\u7684dev\u5206\u652F\u548C\u672C\u5730\u7684dev\u5206\u652F\u5173\u8054\u8D77\u6765\uFF1A</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev

<span class="token comment"># 6. \u9A8C\u8BC1\u521B\u5EFA\u7684\u5206\u652F\u662F\u5426\u6210\u529F\uFF1A</span>
<span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u51FA\u73B0Already up to date\uFF0C\u4EE3\u8868\u8BE5\u5206\u652F\u521B\u5EFA\u6210\u529F\u3002</p><h2 id="_5-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 5. \u5E38\u89C1\u95EE\u9898</h2><h3 id="_5-1-git-failed-to-connect-to-github-com-port-443" tabindex="-1"><a class="header-anchor" href="#_5-1-git-failed-to-connect-to-github-com-port-443" aria-hidden="true">#</a> 5.1. git Failed to connect to github.com port 443</h3><p>-[2] to include in what will be committed</p><h3 id="_5-2-error-src-refspec-main-does-not-match-any" tabindex="-1"><a class="header-anchor" href="#_5-2-error-src-refspec-main-does-not-match-any" aria-hidden="true">#</a> 5.2. error: src refspec main does not match any</h3><h3 id="_5-3-error-failed-to-push-some-refs-to" tabindex="-1"><a class="header-anchor" href="#_5-3-error-failed-to-push-some-refs-to" aria-hidden="true">#</a> 5.3. error: failed to push some refs to</h3><p><strong>\u4EA7\u751F\u539F\u56E0\uFF1A</strong></p><p>When multiple developers work on the same branch, it can cause a sequencing issue in Git. A commit gets rejected and causes a failed to push some refs to error because the remote branch contains code that you do not have locally. What this means is that your local git repository is not compatible with the remote origin.</p>`,20),W={href:"https://komodor.com/learn/how-to-fix-failed-to-push-some-refs-to-git-errors/#:~:text=failed%20to%20push%20some%20refs%20to%20errors%20are%20often%20caused,sync%20with%20the%20Git%20repository",target:"_blank",rel:"noopener noreferrer"},$=n("\u89E3\u51B3\u529E\u6CD5"),J=o(`<h3 id="_5-4-openssl-ssl-read-connection-was-reset-errno-10054" tabindex="-1"><a class="header-anchor" href="#_5-4-openssl-ssl-read-connection-was-reset-errno-10054" aria-hidden="true">#</a> 5.4. OpenSSL SSL_read: Connection was reset, errno 10054</h3><p><strong>\u4EA7\u751F\u539F\u56E0\uFF1A</strong></p><p>\u4E00\u822C\u662F\u8FD9\u662F\u56E0\u4E3A\u670D\u52A1\u5668\u7684SSL\u8BC1\u4E66\u6CA1\u6709\u7ECF\u8FC7\u7B2C\u4E09\u65B9\u673A\u6784\u7684\u7B7E\u7F72</p><p><strong>\u89E3\u51B3\u529E\u6CD5\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u9664ssl\u9A8C\u8BC1</span>
<span class="token function">git</span> config --global http.sslVerify <span class="token string">&quot;false&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-fatal-couldn-t-find-remote-ref-master" tabindex="-1"><a class="header-anchor" href="#_5-5-fatal-couldn-t-find-remote-ref-master" aria-hidden="true">#</a> 5.5. fatal: Couldn&#39;t find remote ref master</h3><h3 id="_5-6-another-git-process-seems-to-be-running-in-this-repository" tabindex="-1"><a class="header-anchor" href="#_5-6-another-git-process-seems-to-be-running-in-this-repository" aria-hidden="true">#</a> 5.6. Another git process seems to be running in this repository</h3><p>\u6839\u636E\u6211\u4EEC\u6240\u4E86\u89E3\u5230\u7684\uFF0Cwindows\u5BF9\u4E8E\u8FDB\u7A0B\u7684\u540C\u6B65\u4E92\u65A5\u7BA1\u7406\uFF0C\u662F\u6709\u8D44\u6E90\u4E0A\u9501\u673A\u5236\u7684\u3002\u731C\u6D4B\u8FD9\u91CC\u80AF\u5B9A\u662F\u6709\u8FDB\u7A0B\u5BF9\u67D0\u8D44\u6E90\u8FDB\u884C\u4E86\u52A0\u9501\uFF0C\u4F46\u662F\u7531\u4E8E\u8FDB\u7A0B\u7A81\u7136\u5D29\u6E83\uFF0C\u672A\u6765\u5F97\u53CA\u89E3\u9501\uFF0C\u5BFC\u81F4\u5176\u4ED6\u8FDB\u7A0B\u8BBF\u95EE\u4E0D\u4E86\u3002</p><p>\u6839\u636E\u63D0\u793A\uFF0C\u6253\u5F00\u6587\u4EF6\u5939\u9009\u9879\uFF0C\u6253\u5F00\u663E\u793A\u9690\u85CF\u6587\u4EF6\uFF0C\u8FDB\u5165\u5DE5\u4F5C\u533A\u76EE\u5F55\u4E0B\u7684\u9690\u85CF\u6587\u4EF6.git\uFF0C\u5176\u4E2D\u7684index.lock\u6587\u4EF6\u5220\u9664\u6389;</p><h2 id="_6-\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_6-\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> 6. \u53C2\u8003\u6587\u6863</h2>`,10),K={href:"https://blog.csdn.net/qq_37808895/article/details/90733824",target:"_blank",rel:"noopener noreferrer"},P=n("Git\u8FDE\u63A5GitHub"),Q={href:"https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-Git-%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"},R=n("Git\u5BF9\u8C61(git-scm.com)");function U(X,Y){const t=r("router-link"),a=r("ExternalLinkIcon");return d(),c("div",null,[h,e("nav",p,[e("ul",null,[e("li",null,[s(t,{to:"#_1-\u6982\u8FF0"},{default:i(()=>[g]),_:1})]),e("li",null,[s(t,{to:"#_2-\u6838\u5FC3\u6982\u5FF5"},{default:i(()=>[m]),_:1})]),e("li",null,[s(t,{to:"#_3-\u5E95\u5C42\u539F\u7406"},{default:i(()=>[b]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#_3-1-\u76EE\u5F55\u7ED3\u6784"},{default:i(()=>[_]),_:1})]),e("li",null,[s(t,{to:"#_3-2-\u72B6\u6001\u6A21\u578B"},{default:i(()=>[v]),_:1})]),e("li",null,[s(t,{to:"#_3-3-\u5B58\u50A8\u6A21\u578B"},{default:i(()=>[f]),_:1})]),e("li",null,[s(t,{to:"#_3-4-\u5206\u652F\u7BA1\u7406"},{default:i(()=>[k]),_:1})])])]),e("li",null,[s(t,{to:"#_4-\u4F7F\u7528\u5B9E\u8DF5"},{default:i(()=>[x]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#_4-1-git\u5B89\u88C5\u4E0E\u914D\u7F6E"},{default:i(()=>[q]),_:1})]),e("li",null,[s(t,{to:"#_4-2-ssh\u8FDC\u7A0B\u8BBF\u95EE"},{default:i(()=>[G]),_:1})]),e("li",null,[s(t,{to:"#_4-3-\u8FDC\u7A0B\u4ED3\u5E93clone\u5230\u672C\u5730"},{default:i(()=>[y]),_:1})]),e("li",null,[s(t,{to:"#_4-4-\u672C\u5730\u4ED3\u5E93\u63D0\u4EA4\u5230github"},{default:i(()=>[S]),_:1})]),e("li",null,[s(t,{to:"#_4-5-\u5E38\u7528\u547D\u4EE4"},{default:i(()=>[w]),_:1})]),e("li",null,[s(t,{to:"#_4-6-\u83B7\u53D6\u8FDC\u7A0B\u66F4\u65B0"},{default:i(()=>[A]),_:1})]),e("li",null,[s(t,{to:"#_4-7-\u57FA\u4E8Emaster\u521B\u5EFA\u65B0\u5206\u652F"},{default:i(()=>[H]),_:1})])])]),e("li",null,[s(t,{to:"#_5-\u5E38\u89C1\u95EE\u9898"},{default:i(()=>[E]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#_5-1-git-failed-to-connect-to-github-com-port-443"},{default:i(()=>[L]),_:1})]),e("li",null,[s(t,{to:"#_5-2-error-src-refspec-main-does-not-match-any"},{default:i(()=>[B]),_:1})]),e("li",null,[s(t,{to:"#_5-3-error-failed-to-push-some-refs-to"},{default:i(()=>[C]),_:1})]),e("li",null,[s(t,{to:"#_5-4-openssl-ssl-read-connection-was-reset-errno-10054"},{default:i(()=>[j]),_:1})]),e("li",null,[s(t,{to:"#_5-5-fatal-couldn-t-find-remote-ref-master"},{default:i(()=>[z]),_:1})]),e("li",null,[s(t,{to:"#_5-6-another-git-process-seems-to-be-running-in-this-repository"},{default:i(()=>[M]),_:1})])])]),e("li",null,[s(t,{to:"#_6-\u53C2\u8003\u6587\u6863"},{default:i(()=>[V]),_:1})])])]),D,e("p",null,[e("strong",null,[F,e("a",I,[N,s(a)]),O])]),T,e("p",null,[e("a",W,[$,s(a)])]),J,e("p",null,[e("a",K,[P,s(a)]),e("a",Q,[R,s(a)])])])}var ee=l(u,[["render",U],["__file","git_skill.html.vue"]]);export{ee as default};