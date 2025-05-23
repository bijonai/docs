import { DefaultTheme } from "vitepress";

const blogs: DefaultTheme.Sidebar = [
  {
    text: '2025.05.22@流式输出进行伪工具调用以增强参数的推理性和操作速度'
  }
]

const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Guides',
    items: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'About EchoAI',
            link: '/documentation/guides/about-echoai'
          },
          {
            text: 'Sciux Community',
            link: '/documentation/guides/sciux-community'
          }
        ]
      },
      {
        text: 'Modules',
        items: [
          {
            text: 'Whiteboard',
          },
          {
            text: 'Timeline',
          },
          {
            text: 'Chat',
          },
          {
            text: 'Resource Community',
          }
        ]
      }
    ]
  },
  {
    text: 'References',
    items: [
      {
        text: 'Contribution',
        items: [
          {
            text: 'Getting Started',
            // link: '/documentation/contribution/contributing-to-echoai'
          },
          {
            text: 'Frontend'
          },
          {
            text: 'Backend',
          },
          {
            text: 'SciuxJs',
          },
          {
            text: 'Sciux Laplace',
          }
        ]
      },
      {
        text: 'Workflow',
        items: [
          {
            text: 'Getting Started',
          },
          {
            text: 'Designer Context'
          },
          {
            text: 'Layout Context',
          },
          {
            text: 'Chalk Context'
          },
          {
            text: 'Speaker Context',
          }
        ]
      },
      {
        text: 'Design Guidelines',
        items: [
          {
            text: 'Getting Started',
          },
          {
            text: 'Sciux Parameters & Presets Improvement for LLM'
          },
          {
            text: 'Interactive Design'
          }
        ]
      }
    ]
  },
  {
    text: 'Blogs',
    items: blogs
  }
]

export default sidebar