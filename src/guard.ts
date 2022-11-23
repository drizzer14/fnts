/**
 * @module Guard
 */

import type { VariadicFunction } from './types/function';

export type GuardQualifier<Function extends VariadicFunction> = [
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
  <Function extends VariadicFunction> (
    ...qualifiers: [...GuardQualifier<Function>[], Function]
  ): Function {
  return ((...args: Parameters<Function>) => {
    const length = qualifiers.length - 1

    for (let index = 0; index < length; index += 1) {
      const [validator, expression] = (qualifiers as GuardQualifier<Function>[])[index]

      if (validator(...args)) {
        return expression(...args)
      }
    }

    return (qualifiers[length] as Function)(...args)
  }) as Function
}
