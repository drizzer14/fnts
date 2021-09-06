import type { Last } from './.internal/last'

/**
 * Creates a `Composition` type which parses all of the provided functions' types.
 * Any function with either an incorrect argument or a return type will not fit
 * into the composition and should be typed according to it, so that its argument's
 * type matches the return type of the next function and its return type
 * matches the type of the previous function's argument.
 */
export type Composition<
  Functions extends Array<(...args: any[]) => any>,
  Length extends number = Functions['length']
> =
  Length extends 1
    ? Functions
    : Functions extends [...infer Rest, infer Penultimate, infer Last]
      ? [
        ...Composition<
          // Weirdly `Rest`, `Penultimate` and `Last`,
          // which we extended from unary function type,
          // are not considered as functions in this expression
          // @ts-ignore
          [...Rest, (arg: ReturnType<Last>) => ReturnType<Penultimate>]
        >,
        Last
      ]
      : any

/**
 * Applies all of the provided `functions` one-by-one in right-to-left order
 * starting from the `argument`.
 */
export const compose =
  <Functions extends Array<(arg: any) => any>> (
    ...functions: Composition<Functions>
  ) =>
    (arg: Parameters<Last<Functions>>[0]): ReturnType<Functions[0]> => {
      const length = (functions as any[]).length
      let composition = arg

      for (let index = length - 1; index >= 0; index -= 1) {
        const current = functions[index]

        composition = current(composition)
      }

      return composition as ReturnType<Functions[0]>
    }

export default compose
