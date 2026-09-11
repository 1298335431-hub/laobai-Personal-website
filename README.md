[![白一帆的动态星图 · 点击进入作品集](./assets/portfolio-banner.svg?v=b26531f)](https://1298335431-hub.github.io/laobai-Personal-website/star-map-portfolio.html)

<p align="center">点击上方动态星图，进入我的个人作品集。</p>

# 白一帆 · AI 产品经理作品集

以处女座星图作为入口的个人作品集，围绕 AI 产品、研究、开发与表达，展示项目实践、个人介绍和文章思考。

点击星点进入对应栏目，在项目中了解问题、方案与验证过程，在文章中记录持续的观察与学习。

## 页面入口

- [在线访问作品集](https://1298335431-hub.github.io/laobai-Personal-website/star-map-portfolio.html) — 点击即可浏览完整页面。

- [星图作品集源码](./star-map-portfolio.html) — 新增的独立页面，样式与交互脚本都包含在一个 HTML 文件中。
- [原首页源码](./index.html) — 仓库原有首页，配套文件为 `style.css` 和 `script.js`。

顶部星图和在线访问链接会打开实际网页；源码链接用于查看文件内容。

## 星图版功能

| 模块 | 说明 |
| --- | --- |
| 星图导航 | 以处女座星点与连线组织导航，点击进入项目、个人介绍或文章区域 |
| 项目展示 | 按“全部项目 / 产品设计 / 开发实践”筛选，通过弹窗查看案例详情 |
| 关于我 | 展示姓名、求职方向、背景与 GitHub 入口 |
| 文章与思考 | 按知识分享、日常思考筛选文章，并提供原文入口 |
| 平台与联系 | 支持配置内容平台链接和邮箱 |
| 动画与适配 | 提供动画暂停按钮、移动端目录与响应式排版 |

当前星图版的项目、文章和部分个人资料尚待填写。页面中的案例结构用于提示如何组织内容，不代表已完成的项目或个人成果。

## 本地预览

下载仓库后，直接使用现代浏览器打开 `star-map-portfolio.html` 即可。星图版无需安装依赖或执行构建。

也可以在已安装 Python 3 的环境中，在仓库目录运行：

```bash
python3 -m http.server 8000
```

然后访问 [本地星图作品集](http://localhost:8000/star-map-portfolio.html)。原首页对应 [本地首页](http://localhost:8000/)。

## 更新内容

在 `star-map-portfolio.html` 中搜索 `const portfolioData`，集中修改以下数据：

| 字段 | 内容 |
| --- | --- |
| `profile` | 姓名、求职方向、介绍、背景、GitHub 链接与邮箱 |
| `projects` | 产品设计与开发项目 |
| `writings` | 文章标题、分类、日期、摘要与原文链接 |
| `platforms` | 各内容平台的名称、描述与链接 |

### 添加项目

向 `projects` 数组中添加对象，例如：

```js
{
  id: "my-first-project",
  type: "product",
  name: "你的项目名称",
  summary: "用一句话说明项目解决的问题",
  role: "你在项目中的职责",
  problem: "用户场景与问题依据",
  decisions: "关键决策与方案取舍",
  implementation: "方案与实现过程",
  validation: "验证方式、真实结果与复盘",
  demoUrl: "",
  codeUrl: ""
}
```

`type` 使用 `product` 或 `coding`。开发项目还可以填写 `reflection`，用于展示复盘与下一步。演示和代码链接可留空，填写时使用完整的 HTTP 或 HTTPS 地址。

### 添加文章

向 `writings` 数组中添加对象：

```js
{
  title: "你的文章标题",
  category: "knowledge",
  platform: "发布平台",
  date: "2026-09-11",
  summary: "文章摘要",
  url: ""
}
```

`category` 使用 `knowledge`（知识分享）或 `thought`（日常思考）。

个人资料中的空值会保留相应待补充状态。星图首屏姓名、定位文案等部分内容写在 HTML 中，更换作者时还需同步修改这些位置。

## 文件结构

```text
.
├── assets/portfolio-banner.svg # README 顶部可点击动画
├── index.html                 # 原有首页
├── style.css                  # 原有页面样式
├── script.js                  # 原有页面交互
├── star-map-portfolio.html     # 独立星图作品集
└── README.md                  # 项目说明
```

技术实现采用 HTML、CSS、原生 JavaScript 与内联 SVG。星图版不依赖前端框架、后端服务或数据库。

## 星图来源与署名

页面内记录的星座连线来源为 [Stellarium modern 星座数据](https://github.com/Stellarium/stellarium/blob/master/skycultures/modern/index.json)，坐标来源标注为 [SIMBAD](https://simbad.cds.unistra.fr/simbad/)。

按照页面现有署名，处女座几何改编部分遵循 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。复用该部分时请保留来源与相应许可说明。此说明仅针对星图几何部分，不代表为整个仓库另行授予相同许可。
