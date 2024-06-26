/**
 * @module Types
 */

import type { Tuple } from './tuple'

/**
 * Removes `C` amount of `T` elements from the **start**.
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
