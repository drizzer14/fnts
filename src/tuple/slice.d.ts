import type { BuildTuple } from './build-tuple'

export type Slice<T extends readonly any[],
  C extends number> = T['length'] extends C
  ? T
  : T extends [...BuildTuple<C>, ...infer S]
    ? S
    : any
