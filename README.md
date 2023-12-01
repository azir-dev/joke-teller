# Joke-Teller 随机播放笑话

用户点击讲笑话按钮，听到一句随机的笑话

在线预览 [GitHub Pages](https://azir-dev.github.io/joke-teller/)

## 要点及文档

- 第三方 SDK 的使用
- [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## 感谢免费资源提供商

> Text to Speech 文本转语音

- https://www.voicerss.org/

> Joke 笑话 API 提供方

- https://sv443.net/jokeapi/v2/

> 动画背景 Gif C4D 模型

- https://giphy.com/

> 字体库

- [Google Fonts](https://fonts.google.com/)

## 技术栈

> [Vite 打包 VanillaJs](https://cn.vitejs.dev/)

> [MDN HTML](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)

> [MDN CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)

> [Javascript (VanillaJs)](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)

## icons

用于网页 favicon 以及其他 icon 图标

> favicon.ico: [https://favicon.io/emoji-favicons/hear-no-evil-monkey/](https://favicon.io/emoji-favicons/hear-no-evil-monkey/)

## 代码库、版本管理及静态页面托管

> [github](https://github.com/)

## Vite 部署到 GitHubPages 笔记

> vite.config.js

```js
/** @type {import('vite').UserConfig} */
export default {
  base: "/joke-teller/",
};
```

> github pages setting

```
# 将静态内容部署到 GitHub Pages 的简易工作流程
name: Deploy static content to Pages

on:
  # 仅在推送到默认分支时运行。
  push:
    branches: ['main']

  # 这个选项可以使你手动在 Action tab 页面触发工作流
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages。
permissions:
  contents: read
  pages: write
  id-token: write

# 允许一个并发的部署
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # 单次部署的工作描述
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```
