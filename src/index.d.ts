declare module 'uuid' {
  export function v4(): string
}

declare interface ComponentMapInterface {
  salt: string
  type: ComponentEnum
  instance: any
}

declare global {}
