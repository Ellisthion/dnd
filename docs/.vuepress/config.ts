import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/dnd/',
  lang: 'en-US',

  title: 'D&D Campaign',
  description: 'D&D World and Player Info',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    externalLinkIcon: false,
    lastUpdated: false,
    contributors: false,
    editLink: false,

    // navbar: ['/', '/get-started'],
    navbar: [],
    sidebar: [
      {
        text: 'Welcome',
        link: '/'
      },
      {
        text: 'Character Creation',
        children: [
          {
            text: 'Your Character',
            link: 'characters/characters'
          },
          {
            text: 'Character Creation',
            link: 'characters/character-rules'
          }
        ]
      },
      {
        text: 'Rules',
        children: [
          {
            text: 'Rules Changes',
            link: 'rules/rules-changes'
          },
        ]
      },
      {
        text: 'The World',
        children: [
          {
            text: 'World Map',
            link: 'world/map'
          },
          {
            text: 'Overview of the World',
            link: 'world/world-overview'
          }
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
