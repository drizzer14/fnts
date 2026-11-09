/**
 * @module Types
 */

import { Trim } from './trim.js'
import { Slice } from './slice.js'

/**
 * Replaces `T` element on specified index `I` with `E`.
 */
export type Unshift<Array extends ReadonlyArray<any>, Index extends number, Element> =
  Index extends 0
    ? [Element, ...Slice<Array, 1>]
    : Index extends Trim<Array, 1>['length']
      ? [...Trim<Array, 1>, Element]
      : [...Trim<Array, Slice<Array, Index>['length']>, Element, ...Slice<Slice<Array, Index>, 1>]
