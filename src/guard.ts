export type Guard<Function extends (...args: any[]) => any> = [
  validator: <Result extends boolean>(...args: Parameters<Function>) => Result,
  executor: Function
]

/**
 * A function which accepts the pairs of guards:
 * the first one is the `validator`, expected to return a boolean value.
 *
 * If the value is `true`, it's `executor` should run with the provided `args`
 * and return from the `guards` function.
 * If the value is `false`, the process continues to the next `validator`.
 *
 * When no `validator` succeeds, the default executor is run.
 */
export default function guard
  <Function extends (...args: any[]) => any> (
    ...guards: [...Guard<Function>[], Function]
  ): (...args: Parameters<Function>) => ReturnType<Function> {
  return (...args) => {
    const length = guards.length - 1

    const defaultExecutor = guards[length] as Function

    for (let index = 0; index < length; index += 1) {
      const [validator, executor] = (guards as Guard<Function>[])[index]

      if (validator(...args)) {
        return executor(...args)
      }
    }

    return defaultExecutor(...args)
  }
}
