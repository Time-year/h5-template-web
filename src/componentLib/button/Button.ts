import { App } from 'vue'
import index from './index.vue'

export interface ButtonProp {
  width?: number
  height?: number
  content?: string
  bg?: string
  /** 内容水平剧中 */
  contentCenter?: boolean
  /** 内容垂直剧中 */
  contentItemsCenter?: boolean
  /** 点击跳转 页面或链接 */
  link?: string
}

class Button {
  private componentInstance: App<Element> | null = null
  private container: HTMLElement | null = null
  constructor(private componentId: string, private option?: ButtonProp) {}

  getProps() {
    return {
      ...this.option
    }
  }

  mountComponent() {
    this.componentInstance = createApp(index, {
      classButtonInstace: reactive<typeof this>(this)
    })
    const app = document.querySelector('#review-main')
    if (!app) return
    this.container = document.createElement('div')
    this.container.classList.add(this.componentId)
    this.container.setAttribute('data-key', this.componentId)
    app.appendChild(this.container)
    this.componentInstance.mount(this.container)
  }

  unmountComponent() {
    if (!this.container) return
    document.querySelector('#review-main')?.removeChild(this.container)
  }
}

export default Button
