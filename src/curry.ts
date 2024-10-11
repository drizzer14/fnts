/**
 * @module Curry
 */

import type { Slice } from './types/slice'
import type { Gradual } from './types/gradual'
import type { VariadicFunction } from './types/function'

/**
 * Creates a type for an auto-curried function.
 */
export type Curry<
  Function extends VariadicFunction,
  Length extends number = Parameters<Function>['length']
> =
  <Args extends Gradual<Parameters<Function>>> (...args: Args) =>
    Args['length'] extends Length
      ? ReturnType<Function>
      : Curry<
        (
          ...args: Slice<Parameters<Function>, Args['length']>
        ) => ReturnType<Function>
      >

/**
 * Creates an auto-curried function from the one provided.
 * Until the curried function receives an expected number of arguments,
 * defined by either its `length` property or the `length` argument of `curry`,
 * it will return new function which receives from one to the remaining amount
 * of arguments.
 * Any excess arguments will not be applied.
 */
export default function curry<
  Function extends VariadicFunction,
  Length extends number = Parameters<Function>['length']
> (
  fn: Function,
  length = fn.length as Length
): Curry<Function, Length> {
  return <A extends Gradual<Parameters<Function>>> (...args: A) => {
    const argsLength = args.length

    if (argsLength === length) {
      return fn(...args)
    }

    if (argsLength > length) {
      return fn(...args.slice(0, length))
    }

    return curry(
      (...nextArgs) => fn(...args.concat(nextArgs)),
      length - argsLength
    )
  }
}
