export type Guard<Function extends (...args: any[]) => any> = [
  <Result extends boolean>(...args: Parameters<Function>) => Result,
  Function
]

export const guard =
  <Function extends (...args: any[]) => any> (
    ...guards: [...Guard<Function>[], Function]
  ) => (...args: Parameters<Function>): ReturnType<Function> => {
    const length = guards.length - 1
    const defaultGuard = guards[length] as Function

    for (let index = 0; index < length; index += 1) {
      const [guard, fn] = (guards as Guard<Function>[])[index]

      if (guard.apply(undefined, args)) {
        return fn.apply(undefined, args)
      }
    }

    return defaultGuard.apply(undefined, args)
  }

export default guard
