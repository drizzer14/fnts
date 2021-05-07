import type { Last } from '../tuple/last'

export type Composition<
  Functions extends Array<(...args: any[]) => any>,
  Length extends number = Functions['length']
> =
  Length extends 1
    ? Functions
    : Functions extends [...infer Rest, infer Penultimate, infer Last]
      ? [
        ...Composition<
          // Weirdly `R`, `F` and `S`, which we extended from unary function type,
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
      return (functions as any[]).reduceRight(
        (accumulator, current) => current(accumulator),
        arg,
      )
    }
