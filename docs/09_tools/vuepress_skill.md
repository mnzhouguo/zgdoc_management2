[[toc]]

生成目录

# 一级标题
## 二级标题

# 一级标题


## 行高亮处理

* 行数范围： {5-8}
* 多个单行： {4,7,9}
* 组合： {4,7-13,16,23-27,40}

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

## 在 Markdown 中使用 Vue
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>


这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />