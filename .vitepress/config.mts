import content from './content.mts'

// .vitepress/config.js
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "EchoAI",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  // description: "Best AI Studymate for YOU",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'App', link: '/' },
      { text: 'Documentation', link: '/documentation' },
      { text: 'Blog', link: '/blog' }
    ],

    logo: '/logo.svg',

    sidebar: content,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bijonai/EchoAI' },
      { icon: 'x', link: 'https://x.com/bijon_ai' },
    ]
  },
  mermaid: {
    theme: "forest",
    gantt: {
      titleTopMargin: 25,
      barHeight: 10,
      barGap: 40,
      topPadding: 75,
    }
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },

  ignoreDeadLinks: true,
  vite: {
  }
});
