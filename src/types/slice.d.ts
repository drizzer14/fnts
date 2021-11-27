/**
 * @module Types
 */

import type { Tuple } from './tuple'

/**
 * Slices the tuple by `C` amount of entries from the **end**.
 */
export type Slice<
  T extends any[] | readonly any[],
  C extends number
> = T['length'] extends C
  ? T
  : T extends readonly [...Tuple<C>, ...infer S]
    ? S
    : T extends [...Tuple<C>, ...infer S]
      ? S
      : T
