import type { Maybe } from './maybe'

export type Fold<Return extends Maybe<any>> =
  Return extends Maybe<infer A>
    ? A
    : never
