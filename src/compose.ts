import type { Last } from './.internal/last'

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
