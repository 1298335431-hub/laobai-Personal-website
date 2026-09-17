# 白一帆 · AI 产品经理作品集

**[访问作品集](https://1298335431-hub.github.io/laobai-Personal-website/)** · **[GitHub 主页](https://github.com/1298335431-hub)** · [邮件联系](mailto:1298335431@qq.com)

把想法做成可用的产品。这个作品集围绕用户问题、产品选择和交付物，展示贴贴与看山说梦两个个人项目，研究、学习与表达的 AI 工作流另设专区。

## 作品与文档

| 项目 | 内容 | 入口 |
| --- | --- | --- |
| 贴贴 / Tietie | 邀请制 AI 图片创作与轻社交，提供三风格生成、二次优化与图文发布包 | [内测体验](https://sv47l1ha6bddrf233tutq.apigateway-cn-beijing.volceapi.com/)（需要邀请码） · [源码](https://github.com/1298335431-hub/tietie) |
| 看山说梦 / LUCIDREAM | 梦境记录、梦象确认、参考性解读与梦卡 | [在线体验](https://seoshulk2a6fn66jib6rs.apigateway-cn-beijing.volceapi.com/) · [源码](https://github.com/1298335431-hub/lucidream) |
| 竞品研究工作流 | 研究范围、来源核验、竞品对比与垂直场景分析 | [工作流与模板](https://github.com/1298335431-hub/Skills/tree/main/competitive-analysis) |
| 英语口语陪练 | 中英结合解释、情境对话、逐轮反馈与迁移练习 | [Learn Spoken English](https://github.com/1298335431-hub/learn-spoken-english) |
| 中文写作与质量检查 | 事实边界、材料核验和中文稿件修订 | [公开文档](https://github.com/1298335431-hub/Skills/tree/main/human-writing-editorial) |

## 页面设计

米白背景、近黑文字与钴蓝点缀，搭配看山说梦的实际工作台画面，以及明确标注的贴贴创作流程图。阅读顺序为两个个人项目、工作流设计、产品方法与联系。项目思考使用原生可展开区域，支持键盘操作，移动端采用单栏布局。

## 本地预览

网站使用原生 HTML 与 CSS，无构建依赖。直接打开 `index.html`，或在目录运行：

```bash
python3 -m http.server 8000
```

访问 [本地作品集](http://localhost:8000/)。

`index.html` 统一指向 `star-map-portfolio.html`。该文件名保留现有链接兼容性，页面已经完整改版。看山说梦的实际工作台图片位于 `assets/lucidream-cover.png`，来自该项目现有公开图像。

## 维护

在 `star-map-portfolio.html` 直接修改内容与样式。页面不依赖 JavaScript，使用语义 HTML、原生 `details` 和响应式 CSS。更新项目时保持图像、链接与事实准确，量化结果应在确认后再补充。
