/**
 * @module Composition
 */

import type { Last } from './types/last'
import type { UnaryFunction, VariadicFunction } from './types/function';

/**
 * Creates a `Composition` type which parses all of the provided functions' types.
 * Any function with either an incorrect argument or a return type will not fit
 * into the composition and should be typed according to it, so that its argument's
 * type matches the return type of the next function and its return type
 * matches the type of the previous function's argument.
 */
export type Composition<
  Functions extends [...UnaryFunction[], VariadicFunction],
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
              : Last extends VariadicFunction
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
 * Applies all of the provided `functions` one-by-one in right-to-left order.
 */
export default function compose<Functions extends [...UnaryFunction[], VariadicFunction]>(
  ...functions: Composition<Functions>
): (...args: Parameters<Last<Functions>>) => ReturnType<Functions[0]> {
  return (...args) => {
    const length = functions.length

    let composition = (functions[length - 1] as VariadicFunction)(...args)

    if (length > 1) {
      for (let index = length - 2; index >= 0; index -= 1) {
        composition = functions[index](composition)
      }
    }

    return composition as ReturnType<Functions[0]>
  }
}
