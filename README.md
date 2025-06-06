# 上海酒店对比网站

这是一个用于对比上海两家顶级酒店套房的展示网站，专门比较金茂君悦大酒店的外交官套房和上海中心J酒店的云上套房。

## 项目特点

- 响应式设计，完美支持移动端和桌面端
- 图片画廊功能，支持查看大图
- 支持键盘快捷键操作
- 简洁明了的酒店信息对比
- 部署在Cloudflare Pages上

## 功能介绍

- 酒店基本信息对比
  - 房型面积
  - 楼层位置
  - 价格信息（现金/积分）
  - 餐饮服务
  - 特色设施
- 图片浏览功能
  - 支持点击放大查看
  - 支持左右滑动切换
  - 支持键盘方向键操作
  - 支持ESC键退出

## 项目结构

```
hotel-comparison/
├── images/
│   ├── hyatt-grand/     # 金茂君悦酒店图片
│   │   ├── 0.jpg       # 主图
│   │   ├── 1.jpg
│   │   └── ...
│   └── j-hotel/        # 上海中心J酒店图片
│       ├── 0.jpg       # 主图
│       ├── 1.jpg
│       └── ...
├── index.html          # 主页面
├── .cloudflare/        # Cloudflare配置
│   └── pages.json      # Pages配置文件
└── README.md          # 项目说明文档
```

## 使用说明

1. 图片命名规则：
   - 每个酒店文件夹包含15张图片（0-14.jpg）
   - 0.jpg 作为酒店主图显示
   - 其他图片按数字顺序在画廊中显示

2. 快捷键操作：
   - ← 左方向键：查看上一张图片
   - → 右方向键：查看下一张图片
   - ESC键：关闭大图查看模式

## 部署说明

1. 克隆项目到本地
2. 在images文件夹中放入酒店图片
3. 部署到Cloudflare Pages：
   - 连接您的GitHub仓库
   - 选择main分支
   - 在项目设置中配置：
     - 构建命令（Build command）留空
     - 构建输出目录（Build output directory）设置为 `/`
     - 根目录（Root directory）留空
   - 环境变量设置（可选）：
     - NODE_VERSION: 16
   - 点击保存并部署

## 技术栈

- HTML5
- CSS3
- JavaScript
- Cloudflare Pages

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 其他现代浏览器

## 许可证

版权所有 © 2025
