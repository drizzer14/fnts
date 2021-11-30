/**
 * @module Composition
 */

import type { Last } from './types/last'
import type { UnaryFunction } from './types/function'

/**
 * Creates a `Composition` type which parses all of the provided functions' types.
 * Any function with either an incorrect argument or a return type will not fit
 * into the composition and should be typed according to it, so that its argument's
 * type matches the return type of the next function and its return type
 * matches the type of the previous function's argument.
 */
export type Composition<
  Functions extends UnaryFunction[],
  Length extends number = Functions['length']
> =
  Length extends 1
    ? Functions
    : Functions extends [...infer Rest, infer Penultimate, infer Last]
      ? [
        ...Composition<
          Rest extends UnaryFunction[]
            ? Last extends UnaryFunction
              ? Penultimate extends UnaryFunction
                ? [...Rest, (arg: ReturnType<Last>) => ReturnType<Penultimate>]
                : never
              : never
            : never
        >,
        Last
      ]
      : Functions

/**
 * Applies all of the provided `functions` one-by-one in right-to-left order
 * starting from the `argument`.
 */
export default function compose<Functions extends UnaryFunction[]>(
  ...functions: Composition<Functions>
): (arg: Parameters<Last<Functions>>[0]) => ReturnType<Functions[0]> {
  return (arg) => {
    const length = functions.length

    let composition = arg

    for (let index = length - 1; index >= 0; index -= 1) {
      composition = functions[index](composition)
    }

    return composition as ReturnType<Functions[0]>
  }
}