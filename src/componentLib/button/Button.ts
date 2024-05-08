import { App, createRenderer } from 'vue'
import index from './index.vue'
import ComponentWrap from '../ComponentWrap.vue'

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
  private container: App<Element> | null = null
  private template: HTMLElement | null = null
  constructor(private componentId: string, private option?: ButtonProp) {
    this.mountComponent()
  }

  getProps() {
    return {
      ...this.option
    }
  }

  mountComponent() {
    const app = document.querySelector('#preview-main')
    if (!app) return

    this.template = document.createElement('div')
    this.template.setAttribute('data-id', this.componentId)
    app.appendChild(this.template)

    this.container = createApp(ComponentWrap, {
      componentId: this.componentId
    })

    this.container.mount(this.template)

    this.componentInstance = createApp(index, {
      classButtonInstace: reactive<typeof this>(this)
    })

    const wrapEl = document.querySelector(`div[data-key='${this.componentId}']`)
    this.componentInstance.mount(wrapEl as Element)
  }

  unmountComponent() {
    if (!this.container) return
    this.componentInstance?.unmount()
    this.container?.unmount()
    document
      .querySelector('#preview-main')
      ?.removeChild(this.template as HTMLElement)
  }
}

export default Button
