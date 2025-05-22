import { defineConfig } from 'vitepress'
import content from './content.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
  }
})
