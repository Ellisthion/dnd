import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from 'vuepress/utils'

export default defineUserConfig({
  base: '/dnd/',
  lang: 'en-US',

  title: 'D&D Campaign',
  description: 'D&D World and Player Info',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],

  // alias: {
  //   '@alias': path.resolve(__dirname, './'),
  // },

  theme: defaultTheme({
    logo: '/images/d20.webp',

    externalLinkIcon: false,
    lastUpdated: false,
    contributors: false,
    editLink: false,

    // navbar: ['/', '/get-started'],
    navbar: [],
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Open Skies Campaign',
        link: 'campaign-open-skies/introduction',
        children: [
          {
            text: 'Introduction',
            link: 'campaign-open-skies/introduction'
          },
          {
            text: 'Your Character',
            link: 'campaign-open-skies/your-character'
          },
          {
            text: 'Character Creation',
            link: 'campaign-open-skies/character-creation'
          }
        ]
      },
      {
        text: 'Blood & Ash Campaign',
        link: 'campaign-blood-ash/introduction',
        children: [
          {
            text: 'Introduction',
            link: 'campaign-blood-ash/introduction'
          },
          {
            text: 'Your Character',
            link: 'campaign-blood-ash/your-character'
          },
          {
            text: 'Character Creation',
            link: 'campaign-blood-ash/character-creation'
          }
        ]
      },
      {
        text: 'Rules',
        link: 'rules/rules-changes',
        children: [
          {
            text: 'Rules Changes',
            link: 'rules/rules-changes'
          },
        ]
      },
      {
        text: 'The World',
        link: 'world/map',
        children: [
          {
            text: 'World Map',
            link: 'world/map'
          }
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
