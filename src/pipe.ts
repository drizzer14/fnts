import type { Last } from './.internal/last'

/**
 * Creates a `Pipeline` type which parses all of the provided functions' types.
 * Any function with either an incorrect argument or a return type will not fit
 * into the pipeline and should be typed according to it, so that its argument's
 * type matches the return type of the previous function and its return type
 * matches the type of the next function's argument.
 */
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
          // Weirdly `First`, `Second` and `Rest`, which we extended from unary function type,
          // are not considered as functions in this expression
          // @ts-ignore
          [(arg: ReturnType<First>) => ReturnType<Second>, ...Rest]
        >
      ]
      : any

/**
 * Applies all of the provided `functions` one-by-one in left-to-right order
 * starting from the `argument`.
 */
export function pipe
  <Functions extends Array<(arg: any) => any>> (
    ...functions: Pipeline<Functions>
  ): (arg: Parameters<Functions[0]>[0]) => ReturnType<Last<Functions>> {
  return (arg) => {
    const length = (functions as any[]).length
    let pipeline = arg

    for (let index = 0; index < length; index += 1) {
      const current = functions[index]

      pipeline = current(pipeline)
    }

    return pipeline
  }
}

export default pipe
