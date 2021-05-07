import type { Last } from '../tuple/last'

export type Piping<
  Functions extends Array<(...args: any[]) => any>,
  Length extends number = Functions['length']
> =
  Length extends 1
    ? Functions
    : Functions extends [infer First, infer Second, ...infer Rest]
      ? [
        First,
        ...Piping<
          // Weirdly `R`, `F` and `S`, which we extended from unary function type,
          // are not considered as functions in this expression
          // @ts-ignore
          [(arg: ReturnType<First>) => ReturnType<Second>, ...Rest]
        >
      ]
      : any

export const pipe =
  <Functions extends Array<(arg: any) => any>> (
    ...functions: Piping<Functions>
  ) =>
    (arg: Parameters<Functions[0]>[0]): ReturnType<Last<Functions>> => {
      return (functions as any[]).reduce(
        (current, accumulator) => current(accumulator),
        arg,
      )
    }
