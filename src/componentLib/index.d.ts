export {}
declare global {
  enum ComponentEnum {
    Button = 'Button'
  }
  interface ComponentMapInterface {
    salt: string
    type: ComponentEnum
    instance: any
  }
}
