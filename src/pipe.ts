import type { Last } from './.internal/last'

export type Pipeline<
  Functions extends Array<(...args: any[]) => any>,
  Length extends number = Functions['length']
> =
  Length extends 1
    ? Functions
    : Functions extends [infer First, infer Second, ...infer Rest]
      ? [
        First,
        ...Pipeline<
          // Weirdly `R`, `F` and `S`, which we extended from unary function type,
          // are not considered as functions in this expression
          // @ts-ignore
          [(arg: ReturnType<First>) => ReturnType<Second>, ...Rest]
        >
      ]
      : any

export const pipe =
  <Functions extends Array<(arg: any) => any>> (
    ...functions: Pipeline<Functions>
  ) =>
    (arg: Parameters<Functions[0]>[0]): ReturnType<Last<Functions>> => {
      const length = (functions as any[]).length
      let pipeline = arg

      for (let index = 0; index < length; index += 1) {
        const current = functions[index]

        pipeline = current(pipeline)
      }

      return pipeline as ReturnType<Last<Functions>>
    }

export default pipe
