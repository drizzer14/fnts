import { foldr } from '../array/foldr'
import type { Last } from '../tuple/last'

export type Composition<
  FS extends Array<(...args: any[]) => any>,
  L extends number = FS['length']
> =
  L extends 1
    ? FS
    : FS extends [...infer R, infer S, infer F]
      ? [
        ...Composition<
          // Weirdly `R`, `F` and `S`, which we extended from unary function type,
          // are not considered as functions in this expression
          // @ts-ignore
          [...R, (arg: ReturnType<F>) => ReturnType<S>]
        >,
        F
      ]
      : any

export const compose = <FS extends Array<(arg: any) => any>> (
  ...fs: Composition<FS>
) => (arg: Parameters<Last<FS>>[0]): ReturnType<FS[0]> => {
  return foldr<(arg: any) => any, any>(
    fs,
    (current, accumulator) => current(accumulator),
    arg,
  )
}
