import { defineClientConfig } from 'vuepress/client'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(FloatingVue)
  },
  setup() {},
  rootComponents: [],
})