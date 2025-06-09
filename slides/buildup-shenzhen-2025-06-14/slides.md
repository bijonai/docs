---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 'EchoAI: 一次对AI教育重定义的尝试 - 让每个人都有一个学习搭子'
exportFilename: EchoAI - 一次对AI教育重定义的尝试 - 让每个人都有一个学习搭子
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 200
routerMode: hash
---

<div translate-x--10>

<h1>
  <span text-sky>EchoAI</span>: 一次对AI教育重定义的尝试 - 让每个人都有一个学习搭子
</h1>

<p>
  <span text="sky-300/90">EchoAI</span>: A try to redefine AI education - Make everyone a 'Studymate'
</p>

<span text-sky>Acbox/小箱子</span>

<img src="/logo.svg" class="w-180 opacity-30" absolute right="[-35%]" bottom="[-230%]" >

</div>

---
layout: intro
class: px-35
glowSeed: 128
---

<div flex items-center gap-3>
  <div
    v-click="1"
    :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'"
    flex flex-col items-start transition duration-500 ease-in-out min-w-60
  >
    <img src="/avatar.png" w-40 h-40 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>Acbox</span>
    <div>
      <div>
        <span class="opacity-70">"DO-WHAT-I-WANT" Developer</span>
      </div>
      <div text-sm flex items-center gap-2 mt-4>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>sheepbox8646</span>
      </div>
    </div>
  </div>
  <div flex-1 />
  <div flex flex-col gap-8>
    <div mb-4 v-click="2">
      <div mb-4 text-zinc-400>
        <span>目前正在做的事情</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 2 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="/logo.svg" size="6.5" >
          <div>EchoAI</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="/sciux.jpeg" size="6.5" >
          <div>Sciux Kit</div>
        </div>
      </div>
    </div>
    <div v-click="3">
      <div mb-4 text-zinc-400>
        <span>其他项目 / 组织</span>
      </div>
      <div
        flex flex-wrap items-start content-start gap-4 transition duration-500 ease-in-out
        :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'"
      >
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="https://github.com/Bug-Duck/vuemotion/raw/master/assets/logo.svg" size="6.5" />
          <div>VueMotion</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="https://newcar.js.org/newcar_uni.webp" size="6.5" />
          <div>NewCar</div>
        </div>
        <div flex items-center gap-2 text-2xl w-fit h-fit>
          <img src="https://avatars.githubusercontent.com/u/41095225?s=200&v=4g" size="6.5" />
          <div>Dromara</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click="3" w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <!-- <img src="/nekomeoww-qr.png" h-50> -->
  </div>
</div>

---

<Youtube id="m2MIpDrF7Es?start=32" class="w-full h-full" />

---
transition: fade-in | fade-out
---

<div class="flex flex-col items-center">
  <div class="flex h-1/3 justify-center items-center">
    <img src="/3b1b.png" size="50%" v-click="1" :class="$clicks < 1 ? 'scale-90 opacity-0' : 'scale-100 opacity-100'" transition duration-500 ease-in-out>
  </div>
  <div class="flex flex-col items-start mt-10">
    <h2 v-click="2" :class="$clicks < 2 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>3Blue1Brown</h2>
    <p v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
      <span>
        由Grant Sanderson创建的数学教育YouTube频道
      </span>
      <span>3Blue1Brown</span>
    </p>
    <div class="mt-4">
      <h3 v-click="4" :class="$clicks < 4 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>Manim</h3>
      <ul>
        <li v-click="5" :class="$clicks < 5 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>Grant开发的数学动画引擎</li>
        <li v-click="6" :class="$clicks < 6 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>用于创建精美的数学可视化</li>
        <li v-click="7" :class="$clicks < 7 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>开源项目，被广泛用于数学教育</li>
      </ul>
    </div>
  </div>
</div>

---

# 教育痛点：传统学习方式的困境

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click="1" :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>

## 📚 传统教育问题

- **被动接受知识灌输** 缺乏主动探索
- **一对多教学模式** 无法个性化定制
- **静态教学材料** 难以形象化抽象概念
- **学习效果难以量化** 缺乏实时反馈

</div>

<div v-click="2" :class="$clicks < 2 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>

## 🎯 学生学习挑战

- **注意力分散** 难以保持长时间专注
- **理解困难** 抽象概念难以形象化
- **缺乏陪伴** 孤独的学习过程
- **进度不匹配** 千人一面的教学节奏

</div>

</div>

<div class="mt-12 text-center" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <div class="text-2xl font-bold text-red-500">
    我们需要一个更智能、更个性化的学习伙伴
  </div>
</div>

---
layout: center
class: text-center
---

# EchoAI：学习方式的革命

<div class="text-6xl mb-8" v-click="1" :class="$clicks < 1 ? 'scale-90 opacity-0' : 'scale-100 opacity-100'" transition duration-500 ease-in-out>
  🤖 + 📋 + 🎯
</div>

<div class="text-2xl mb-8 leading-relaxed" v-click="2" :class="$clicks < 2 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <span class="text-blue-500 font-bold">AI陪伴式学习</span> × 
  <span class="text-green-500 font-bold">交互式白板</span> × 
  <span class="text-purple-500 font-bold">个性化时间线</span>
</div>

---
layout: two-cols
---

# 🎨 核心功能：交互式白板

<div class="mr-4" v-motion :click-1="{ y: -200 }">

## 多样化组件支持

**数学组件**
- 函数图像、坐标系
- 几何图形、概率分布
- 统计图表

**物理组件**
- 物理公式、实验装置
- 现象动画、力学模拟

**展示组件**
- 列表、表格、公式
- 代码块、思维导图

**交互组件**
- 按钮、滑块、开关
- 互动题目与游戏

</div>

::right::

<div class="ml-4">

## 技术架构

<div class="bg-sky-200 p-4 rounded-lg mb-4">
  <div class="text-center font-semibold mb-2">Sciux 生态系统</div>
  <div class="text-sm">
    <div class="mb-2">📚 <strong>Sciux Lib</strong><br/>STEM前端组件库</div>
    <div>⚡ <strong>Sciux Laplace</strong><br/>DSL响应式语法渲染器</div>
    <div>🪣 <strong>Sciux Knowledge</strong><br/>针对RAG和Fine Tuning(计划中)的知识库</div>
  </div>
</div>

## 特点优势

✅ **矢量可操作** - 每个组件都可编辑
<br/>✅ **多页设计** - 支持复杂教学场景
<br/>✅ **AI驱动** - 智能生成教学内容
<br/>✅ **实时交互** - 即时反馈与调整

</div>

---

![demo](./demo.png)

---

# 🕐 创新设计：智能时间线学习

<svg class="w-full select-none" viewBox="0 0 800 160">
    <g class="timeline-container">
        <path d="M20,50L273.333,50L526.667,50L780,50" fill="none" stroke="#1f77b4" stroke-width="2"></path>
        <circle cx="20" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text x="20" y="60"
            text-anchor="middle" font-size="10px" fill="white">1 理解函数和函数图像</text>
        <circle cx="273.3333333333333" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text
            x="273.3333333333333" y="40" text-anchor="middle" font-size="10px" fill="white">2 理解平均变化率</text>
        <circle cx="526.6666666666666" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text
            x="526.6666666666666" y="60" text-anchor="middle" font-size="10px" fill="white">3 理解瞬时变化率和导数的定义</text>
        <circle cx="780" cy="50" r="5" stroke="#1f77b4" stroke-width="2" fill="white"></circle><text x="780" y="40"
            text-anchor="middle" font-size="10px" fill="white">4 导数的记法和基本导数公式</text>
        <path d="M273.333,110L526.667,110" fill="none" stroke="#ff7f0e" stroke-width="2"></path>
        <circle cx="273.3333333333333" cy="110" r="5" stroke="#ff7f0e" stroke-width="2" fill="white"></circle><text
            x="273.3333333333333" y="120" text-anchor="middle" font-size="10px" fill="white">2-1 复习速度的概念</text>
        <circle cx="526.6666666666666" cy="110" r="5" stroke="#ff7f0e" stroke-width="2" fill="white"></circle><text
            x="526.6666666666666" y="100" text-anchor="middle" font-size="10px" fill="white">2-2 理解平均速度的定义</text>
    </g>
</svg>

---
layout: center
---

# 🧠 AI工作流：四大智能角色协同

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
  <div class="text-3xl mb-2">🧑‍🎨</div>
  <h3 class="font-bold text-lg mb-2">Designer 设计师</h3>
  <p class="text-sm">分析用户需求，设计个性化学习时间线和教学步骤</p>
</div>

<div class="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
  <div class="text-3xl mb-2">🧑‍🏫</div>
  <h3 class="font-bold text-lg mb-2">Speaker 讲师</h3>
  <p class="text-sm">基于时间节点提供详细讲解，确保知识传递准确性</p>
</div>

<div class="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl">
  <div class="text-3xl mb-2">🎨</div>
  <h3 class="font-bold text-lg mb-2">Layout 布局师</h3>
  <p class="text-sm">设计最适合的组件布局，创建互动游戏和练习</p>
</div>

<div class="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl">
  <div class="text-3xl mb-2">👩‍💻</div>
  <h3 class="font-bold text-lg mb-2">Chalk 画师</h3>
  <p class="text-sm">将设计转化为实际的Sciux代码，操作白板内容</p>
</div>

</div>

---

# 🌍 社区：共享与成长

<div class="grid grid-cols-2 gap-8 mt-8">
  <div v-click="1" :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <h3 class="text-2xl font-bold mb-4">📚 教育资源</h3>
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <div class="text-2xl">🎓</div>
        <div>
          <div class="font-semibold">国际课程体系</div>
          <div class="text-sm opacity-70">IB/AP/A-level/DSE</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-2xl">📝</div>
        <div>
          <div class="font-semibold">高考资源</div>
          <div class="text-sm opacity-70">历年真题与解析</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-2xl">📖</div>
        <div>
          <div class="font-semibold">教材与教辅</div>
          <div class="text-sm opacity-70">电子版教材与练习册</div>
        </div>
      </div>
    </div>
  </div>

  <div v-click="2" :class="$clicks < 2 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <h3 class="text-2xl font-bold mb-4">🤝 社区特色</h3>
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <div class="text-2xl">👥</div>
        <div>
          <div class="font-semibold">用户贡献</div>
          <div class="text-sm opacity-70">分享学习笔记与经验</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-2xl">🎯</div>
        <div>
          <div class="font-semibold">AI 辅助</div>
          <div class="text-sm opacity-70">智能解析与个性化推荐</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-2xl">📈</div>
        <div>
          <div class="font-semibold">持续更新</div>
          <div class="text-sm opacity-70">实时同步最新教育资源</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <p class="text-lg">
    在这里，每个人都可以成为知识的创造者和分享者，<br/>
    共同构建一个开放、互助的学习社区
  </p>
</div>

---
layout: center
---

# 📜 我们的故事

<div class="text-center">
  <div class="text-6xl mb-8" v-click="1" :class="$clicks < 1 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>🚀</div>
  <h2 class="text-3xl font-bold mb-4" v-click="2" :class="$clicks < 2 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>从 Newcar 到 EchoAI</h2>
  <p class="text-xl opacity-80" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>一段关于教育科技创新的探索之旅</p>
</div>

---
layout: center
---

# 2022: 一切的开始

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="flex flex-col items-center" v-click="1" :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <p class="text-lg">受到 Manim 的启发</p>
  </div>
  <div class="flex flex-col items-center" v-click="2" :class="$clicks < 2 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <p class="text-lg">Newcar 诞生</p>
  </div>
</div>

<div class="mt-8 text-center" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <p class="text-lg">
    2022年底，我们开始了一个大胆的尝试：<br/>
    在前端实现一个类似 Manim 的动画引擎
  </p>
</div>

---
layout: center
---

# 2024: 新的突破

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="flex flex-col items-center" v-click="1" :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <div class="text-6xl mb-4">🤝</div>
    <p class="text-lg">开始接触AI产品</p>
    <p class="text-sm opacity-70 mt-2">朋友提出了一个大胆的想法</p>
  </div>
  <div class="flex flex-col items-center" v-click="2" :class="$clicks < 2 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <div class="text-6xl mb-4">⚡</div>
    <p class="text-lg">VueMotion 的诞生</p>
    <p class="text-sm opacity-70 mt-2">探索响应式动画的可能性</p>
  </div>
</div>

<div class="mt-8 text-center" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <p class="text-lg">
    这一年，我们发现了前端动画引擎的独特优势：<br/>
    不是生成视频，而是创造可交互的体验
  </p>
</div>

---
layout: center
---

# 2025年初: 转折点

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="flex flex-col items-center" v-click="1" :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <div class="text-6xl mb-4">🎓</div>
    <p class="text-lg">加入 SparkLab</p>
    <p class="text-sm opacity-70 mt-2">一个充满创造力的黑客松创造营</p>
  </div>
  <div class="flex flex-col items-center" v-click="2" :class="$clicks < 2 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <div class="text-6xl mb-4">💡</div>
    <p class="text-lg">EchoAI 的雏形</p>
    <p class="text-sm opacity-70 mt-2">与 @Seimo 的灵感碰撞</p>
  </div>
</div>

<div class="mt-8 text-center" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <p class="text-lg">
    在 SparkLab 的 8 天里，<br/>
    我们确定了 EchoAI 的产品形态和未来方向
  </p>
</div>

---
layout: center
---

# 2025年: 现在的 EchoAI

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="flex flex-col items-center" v-click="1" :class="$clicks < 1 ? 'translate-x--5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <div class="text-6xl mb-4">🔧</div>
    <p class="text-lg">Sciux 框架</p>
    <p class="text-sm opacity-70 mt-2">专为教学场景设计的 DSL</p>
  </div>
  <div class="flex flex-col items-center" v-click="2" :class="$clicks < 2 ? 'translate-x-5 opacity-0' : 'translate-x-0 opacity-100'" transition duration-500 ease-in-out>
    <div class="text-6xl mb-4">🤖</div>
    <p class="text-lg">AI 驱动</p>
    <p class="text-sm opacity-70 mt-2">智能生成与交互</p>
  </div>
</div>

<div class="mt-8 text-center" v-click="3" :class="$clicks < 3 ? 'translate-y-5 opacity-0' : 'translate-y-0 opacity-100'" transition duration-500 ease-in-out>
  <p class="text-lg">
    从简单的动画引擎，到完整的 AI 教育解决方案，<br/>
    我们一直在探索教育与技术的完美结合
  </p>
</div>

---
layout: center
---

# 👥 团队介绍：BijonAI

<div class="grid grid-cols-1 gap-6 mt-8 max-w-4xl mx-auto">

<div class="text-center">
  <h2 class="text-2xl font-bold mb-4">创新型AI团队</h2>
  <p class="text-lg opacity-80">专注于教育科技与人工智能的深度融合</p>
</div>

<div class="grid grid-cols-3 gap-6 mt-8">

</div>

<div class="mt-6 text-center">
  <div class="inline-flex items-center space-x-4 text-sm opacity-70">
    <span>📧 info@bijon.ai</span>
    <span>🌐 bijon.ai</span>
    <span>🐦 @bijon_ai</span>
  </div>
</div>

</div>

---
layout: end
class: text-center
---

# 感谢聆听！

<div class="text-6xl mb-8">🚀</div>

<div class="text-2xl mb-6">
  <span class="font-bold text-blue-600">EchoAI</span> - 重新定义学习体验
</div>

<div class="text-lg opacity-80 mb-8">
  让每个学生都拥有专属的AI学长
</div>

<div class="grid grid-cols-2 gap-8 max-w-2xl mx-auto">

<div>
  <h3 class="font-bold mb-2">📞 联系我们</h3>
  <div class="text-sm space-y-1">
    <div>📧 info@bijon.ai</div>
    <div>🌐 bijon.ai</div>
    <div>🐦 @bijon_ai</div>
  </div>
</div>

<div>
  <h3 class="font-bold mb-2">🔗 了解更多</h3>
  <div class="text-sm space-y-1">
    <div>GitHub: bijonai/echoai</div>
    <div>Demo: app.echoai.com</div>
    <div>文档: docs.echoai.com</div>
  </div>
</div>

</div>

<div class="mt-8 text-sm opacity-50">
  BijonAI © 2025 · 用AI重塑教育未来
</div>
