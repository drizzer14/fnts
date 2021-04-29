import { foldl } from '../array/foldl'
import type { Last } from '../tuple/last'

export type Piping<
  FS extends Array<(...args: any[]) => any>,
  L extends number = FS['length']
> =
  L extends 1
    ? FS
    : FS extends [infer F, infer S, ...infer R]
      ? [
          F,
          ...Piping<
            // Weirdly `R`, `F` and `S`, which we extended from unary function type,
            // are not considered as functions in this expression
            // @ts-ignore
            [(arg: ReturnType<F>) => ReturnType<S>, ...R]
          >
        ]
      : any

export const pipe = <FS extends Array<(arg: any) => any>> (
  ...fs: Piping<FS>
) => (arg: Parameters<FS[0]>[0]): ReturnType<Last<FS>> => {
  return foldl<(arg: any) => any, any>(
    fs,
    (current, accumulator) => current(accumulator),
    arg,
  )
}
