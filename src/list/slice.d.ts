import type { Tuple } from './tuple'

export type Slice<
  T extends any[],
  C extends number
> = T['length'] extends C
  ? T
  : T extends [...Tuple<C>, ...infer S]
    ? S
    : T
