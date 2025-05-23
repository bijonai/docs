---
title: About EchoAI
---

# 关于EchoAI

EchoAI是一个带有交互式白板的陪伴式AI学长，它可以帮助你学习任何你想要学习的知识，通过知识探索而并非传统Chatbot的知识灌输，EchoAI可以将被动学习变为陪伴式学习，提高你对新知识探索的专注性与效率。

## 🌈 特点

1. 交互式白板

界面中占比最大的部分（左上区域）是我们的交互式白板，AI可以在上面使用各种各样的组件来完成对一个题目和知识点的解释。每一个组件都是矢量的可操作的，ai的下一次修改都可以基于上一次的图形。同时，白板是多页设计，AI也可以根据你的需求来切换页面。

页面上可以生成的组件包括但不限于

- 数学组件: 包括几何、代数、微积分、概率论、统计学，可绘制函数图像，坐标系，几何图形，概率分布图，统计图表等
- 物理组件: 包括力学、电磁学、光学、热学、量子力学等，可绘制物理公式，物理实验装置，物理现象，并给出相关动画
- 展示组件: 列表，表格，公式，代码块
- 思维图表: 思维导图，流程图，组织结构图
- 交互组件: 按钮，输入框，滑块，开关，选择器，进度条, AI会用这些来设计一些交互题目与游戏
- 布局组件: 行列布局，分栏布局，网格布局

交互式白板的底层是我们的STEM前端组件库 ([Sciux](https://github.com/sciux-kit/lib)) 和我们的DSL响应式语法渲染器 ([Sciux Laplace](https://github.com/sciux-kit/laplace)), 关于Sciux社区请参见[Sciux Community](./sciux-community)

2. 时间线设计

在你的第一次提问时，Designer会输出一条主轴时间线，里面包含3~4个时间节点，每个时间节点都对应一个教学步骤

> 在这里我们提问相关位移，速度与加速度的知识

<svg class="w-full h-full select-none" viewBox="0 0 800 160">
    <g class="timeline-container">
        <path d="M20,50L273.333,50L526.667,50L780,50" fill="none" stroke="#1f77b4" stroke-width="2"></path>
        <circle cx="20" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text x="20" y="60"
            text-anchor="middle" font-size="10px">1 理解函数和函数图像</text>
        <circle cx="273.3333333333333" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text
            x="273.3333333333333" y="40" text-anchor="middle" font-size="10px">2 理解平均变化率</text>
        <circle cx="526.6666666666666" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text
            x="526.6666666666666" y="60" text-anchor="middle" font-size="10px">3 理解瞬时变化率和导数的定义</text>
        <circle cx="780" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text x="780" y="40"
            text-anchor="middle" font-size="10px">4 导数的记法和基本导数公式</text>
    </g>
</svg>

如果你没有疑问，你可以点击NEXT来切换到下一个时间节点，这里切换到第二步。

当你在第二步对这一步的某个点提出疑问，此时Designer会为你设计出一个支线:

> 这里我们假设用户不知道平均速度如何定义，此时Designer会为你设计出一个支线:

<svg class="w-full h-full select-none" viewBox="0 0 800 160">
    <g class="timeline-container">
        <path d="M20,50L273.333,50L526.667,50L780,50" fill="none" stroke="#1f77b4" stroke-width="2"></path>
        <circle cx="20" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text x="20" y="60"
            text-anchor="middle" font-size="10px">1 理解函数和函数图像</text>
        <circle cx="273.3333333333333" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text
            x="273.3333333333333" y="40" text-anchor="middle" font-size="10px">2 理解平均变化率</text>
        <circle cx="526.6666666666666" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text
            x="526.6666666666666" y="60" text-anchor="middle" font-size="10px">3 理解瞬时变化率和导数的定义</text>
        <circle cx="780" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text x="780" y="40"
            text-anchor="middle" font-size="10px">4 导数的记法和基本导数公式</text>
        <path d="M273.333,110L526.667,110" fill="none" stroke="#ff7f0e" stroke-width="2"></path>
        <circle cx="273.3333333333333" cy="110" r="5" stroke="#ff7f0e" stroke-width="2" fill="white"></circle><text
            x="273.3333333333333" y="120" text-anchor="middle" font-size="10px">2-1 复习速度的概念</text>
        <circle cx="526.6666666666666" cy="110" r="5" stroke="#ff7f0e" stroke-width="2" fill="white"></circle><text
            x="526.6666666666666" y="100" text-anchor="middle" font-size="10px">2-2 理解平均速度的定义</text>
    </g>
</svg>

3. 资源社区

::: warning

此功能还在建设中！

:::

我们会在资源社区中提供各种各样的资源，包括但不限于

- 各种课程体系(AP/A-level/IB/OSSD/高考)的课本对应设计的EchoAI课程
- 往年的真题试卷
- 各种题目的专项训练
- ...

用户可以点击获取并使用这个资源来新建一个对话，通过EchoAI来学习这个课程

## 工作流设计

我们的功能由四个LLM上下文组成:

- 🧑‍🎨 Designer: 课程设计师，你的每一次提问都会触发Designer的思考，它将根据你的提问来设计出一条时间线，并给出对应的教学步骤
- 🧑‍🏫 Speaker: 根据每一个时间节点，Speaker会给出对应的讲解，它将根据Designer的设计来给出对应的讲解
- 🧑‍🎨 Layout: 布局设计师，它将根据Designer的设计来给出对应的布局，组件与游戏
- 👩‍💻 Chalk: 画师，它将根据Layout的设计来写出Sciux代码或对现有文档进行操作和修改

## 知识库

Chalk通过RAG来检索知识库中的组件文档和各个知识点的绘图示例，我们希望通过扩大知识库的容量和提高质量来提升画板的功能性和组合多样性。

目前的知识库放在EchoAI的GitHub仓库中: https://github.com/bijonai/EchoAI/tree/main/database

## 社区结构

- 本项目由BijonAI开发，BijonAI是一个创新型的AI团队 [GitHub](https://github.com/bijonai)
- EchoAI GitHub 仓库: [EchoAI](https://github.com/bijonai/echoai)
- Sciux Github 组织: [Sciux](https://github.com/sciux-kit)

## 联系我们

- 邮箱: [info@bijon.ai](mailto:info@bijon.ai)
- 官网: [BijonAI](https://bijon.ai)
- X: [@bijon_ai](https://x.com/bijon_ai)
