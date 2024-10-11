/**
 * @module Types
 */

import { Tuple } from './tuple'

/**
 * Removes `C` amount of `T` elements from the **end**.
 */
export type Trim<
  T extends any[] | readonly any[],
  C extends number
> = T['length'] extends C
  ? T
  : T extends readonly [...infer S, ...Tuple<C>]
    ? S
    : T extends [...infer S, ...Tuple<C>]
      ? S
      : T
