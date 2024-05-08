import { v4 } from 'uuid'
import Button from './button/Button'
import { ComponentEnum } from '../constant/enum'

class ComponentWrapper {
  private componentMap: Array<ComponentMapInterface> = new Array()
  private selectedComponentId: string = ''
  constructor() {}

  getComponentInstance(key: string) {
    return this.componentMap.find(({ salt }) => salt === key)
  }

  addComponent(componentType: ComponentEnum) {
    const key = v4()
    const button = new Button(key, {
      content: '按钮',
      contentCenter: true,
      contentItemsCenter: true
    })
    this.componentMap.push({
      salt: key,
      instance: button,
      type: ComponentEnum.Button
    })
  }

  removeComponent(componentId: string) {
    this.componentMap = this.componentMap.removeBy(
      ({ salt }) => salt != componentId
    )
  }
}

export default ComponentWrapper
