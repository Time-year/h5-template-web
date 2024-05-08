declare module 'uuid' {
  export function v4(): string
}

declare interface ComponentMapInterface {
  salt: string
  type: ComponentEnum
  instance: any
}

declare interface Array<T> {
  removeBy(params: (current: T) => boolean): T[]
  removeBy(params: number): T[]
}

declare global {}
