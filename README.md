# 优雅待办事项 Chrome扩展

一个简洁优雅的Chrome待办事项扩展，采用苹果设计风格，帮助你随时管理待办事项。

![预览图](screenshots/preview.png)

## 功能特点

- 添加新的待办事项
- 标记任务完成/未完成
- 删除已完成的任务
- 数据自动同步到Chrome账户
- 简洁优雅的界面设计
- 支持键盘快捷操作

## 安装方法

### 从Chrome网上应用店安装（即将上线）

1. 访问Chrome网上应用店（链接待添加）
2. 点击"添加到Chrome"按钮

### 开发者模式安装

1. 下载此仓库代码
   ```bash
   git clone https://github.com/fbzyf/elegant-todo-extension.git
   ```
2. 打开Chrome浏览器，进入扩展管理页面：`chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择下载的代码文件夹

## 使用方法

1. 点击Chrome工具栏中的扩展图标打开待办事项列表
2. 在输入框中输入新的待办事项，按回车或点击添加按钮
3. 点击复选框标记任务完成
4. 鼠标悬停在任务上可以看到删除按钮

## 技术说明

- 使用Chrome Extension Manifest V3
- 使用Chrome Storage Sync API实现数据同步
- 采用事件委托优化性能
- 响应式设计适配不同屏幕尺寸

## 贡献指南

欢迎提交Issue和Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m '添加一些特性'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 后续优化计划

1. 添加任务分类功能
2. 实现任务排序功能
3. 添加截止日期功能
4. 添加任务优先级
5. 添加数据导出功能
6. 添加快捷键支持

## 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情