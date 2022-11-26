---
title: Blogging Like a Hacker
lang: en-US
features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---
# {{ $frontmatter.title }}

### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />

# 标题一
## Blog
## Hacker
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger DON'T DO THIS
Danger zone, do not proceed
:::
# 标题二
## Blog

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:

## 代码

```js
export default {
  name: 'MyComponent',
  // ...
}
```

### 高亮
```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
###  验证 使用动态语法
::: v-pre
`{{ 1 + 1 }}`
:::
{{ 1 + 1 }}
::: v-pre
`<span v-for="i in 3">{{ i }} </span>`
:::
<span v-for="i in 3">{{ i }} </span>

::: v-pre
`{{ $page }}`
:::
{{ $page }}

::: v-pre
`{{$frontmatter}}`
:::
{{$frontmatter}}

<!-- [[toc]] -->

### 测试自定义组件

<HelloWorld />

### 渲染底部

<Many />

<script setup>
import  HelloWorld from '../components/HelloWorld.vue'
</script>