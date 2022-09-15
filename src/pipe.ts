/**
 * @module Composition
 */

import type { Last } from './types/last'
import type { UnaryFunction, VariadicFunction } from './types/function';

/**
 * Creates a `Pipeline` type which parses all of the provided functions' types.
 * Any function with either an incorrect argument or a return type will not fit
 * into the pipeline and should be typed according to it, so that its argument's
 * type matches the return type of the previous function and its return type
 * matches the type of the next function's argument.
 */
export type Pipeline<
  Functions extends [VariadicFunction, ...UnaryFunction[]],
  Length extends number = Functions['length']
  > =
  Length extends 1
    ? Functions
    : Functions extends [infer First, infer Second, ...infer Rest]
      ? [
        First,
        ...Pipeline<
          First extends UnaryFunction
            ? Second extends UnaryFunction
              ? Rest extends UnaryFunction[]
                ? [(arg: ReturnType<First>) => ReturnType<Second>, ...Rest]
                : never
              : never
            : First extends VariadicFunction
              ? Second extends UnaryFunction
                ? Rest extends UnaryFunction[]
                  ? [(arg: ReturnType<First>) => ReturnType<Second>, ...Rest]
                  : never
                : never
              : never

        >
      ]
      : Functions

/**
 * Applies all of the provided `functions` one-by-one in left-to-right order.
 */
export default function pipe
  <Functions extends [VariadicFunction, ...UnaryFunction[]]>(
    ...functions: Pipeline<Functions>
  ): (...args: Parameters<Functions[0]>) => ReturnType<Last<Functions>> {
  return (...args) => {
    const length = functions.length

    let pipeline = functions[0](...args)

    if (length > 1) {
      for (let index = 1; index < length; index += 1) {
        pipeline = functions[index](pipeline)
      }
    }

    return pipeline as ReturnType<Last<Functions>>
  }
}
