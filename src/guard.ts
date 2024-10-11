/**
 * @module Guard
 */

import type { VariadicFunction } from './types/function'

export type GuardQualifier<
  Function extends VariadicFunction,
  Validator extends (...args: Parameters<Function>) => boolean
> = [
  validator: Validator,
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
export default function guard<
  Function extends VariadicFunction,
  Validators extends Array<(...args: Parameters<Function>) => boolean>
> (
    ...qualifiers: [...GuardQualifier<Function, Validators[number]>[], Function]
  ): Function {
  return ((...args: Parameters<Function>) => {
    const length = qualifiers.length - 1

    for (let index = 0; index < length; index += 1) {
      const [validator, expression] = (qualifiers as GuardQualifier<Function, Validators[typeof index]>[])[index]

      if (validator(...args)) {
        return expression(...args)
      }
    }

    return (qualifiers[length] as Function)(...args)
  }) as Function
}
