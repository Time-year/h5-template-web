import { createApp } from 'vue'
import './style.css'
import './tailwindcss.css'
import 'ant-design-vue/dist/reset.css'
import route from './router'
import App from '@/view/App.vue'
Array.prototype.removeBy = function (params) {
  if (params instanceof Function) {
    return this.filter(current => !params(current))
  } else if (typeof params === 'number') {
    return this.filter((_current, index) => index != params)
  } else {
    return this
  }
}

const app = createApp(App)
app.use(route)
route.isReady().then(() => {
  app.mount('#app')
})
