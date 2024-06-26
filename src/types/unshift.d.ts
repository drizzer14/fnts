/**
 * @module Types
 */

import { Trim } from './trim'
import { Slice } from './slice'

/**
 * Replaces `T` element on specified index `I` with `E`.
 */
export type Unshift<T extends any[] | readonly any[], I extends number, E> =
  I extends 0
    ? [E, ...Slice<T, 1>]
    : I extends Trim<T, 1>['length']
      ? [...Trim<T, 1>, E]
      : [...Trim<T, Slice<T, I>['length']>, E, ...Slice<Slice<T, I>, 1>]
