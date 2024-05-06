import { v4 } from 'uuid'
import Button from './button/Button'
import { ComponentEnum } from '../constant/enum'

class ComponentWrapper {
  private componentMap: WeakSet<ComponentMapInterface> = new WeakSet()
  constructor(private componentType: string) {
    this.init()
  }

  getComponentInstance(key: string) {}

  init() {
    const key = v4()
    const button = new Button(key, {
      content: '按钮',
      contentCenter: true,
      contentItemsCenter: true
    })
    this.componentMap.add({
      salt: key,
      instance: button,
      type: ComponentEnum.Button
    })
  }
}

export default ComponentWrapper
