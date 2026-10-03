# Yume / Archive

一个纯静态、可自定义的二次元个人主页，不依赖构建工具，可直接部署到 GitHub Pages 或 Cloudflare Pages。

## 自定义

- 修改 `config.js` 中的 `links` 来替换快捷入口。
- 页面右上角设置面板可修改强调色、壁纸 URL、颗粒效果；设置保存在浏览器本地。
- 在 `index.html` 中替换个人介绍、公告、收藏内容。

## Cloudflare Pages

1. 将本目录推送到 GitHub。
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git。
3. Framework preset 选择 `None`，Build command 留空，Output directory 填 `/`（或留空）。
4. 保存并部署即可。这个站点没有后端和环境变量。

