export function singletonProxy<T extends { new (...args: any[]): T }>(
  className: T
) {
  let instance: T
  return new Proxy<T>(className, {
    construct(target, args) {
      if (!instance) instance = new target(...args)
      return instance
    }
  })
}
