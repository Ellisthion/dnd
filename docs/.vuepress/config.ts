import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'D&D Campaign',
  description: 'D&D World and Player Info',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    externalLinkIcon: false,

    // navbar: ['/', '/get-started'],
    navbar: [],
    sidebar: [
      {
        text: 'Welcome',
        link: '/'
      },
      {
        text: 'Characters',
        link: 'player/characters'
      },
      {
        text: 'World',
        link: 'player/world'
      },
      {
        text: 'Rules',
        link: 'player/rules'
      }
    ]
  }),

  bundler: viteBundler(),
})
