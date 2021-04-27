import { or } from '../array/or'
import { map } from '../array/map'
import { ofType } from '../type/of-type'
import { curry2Or3 } from '../.internal/curry-2-or-3'

import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface IncludesFn {
  (
    substring: string,
    fromPosition?: number,
  ): (string: string) => boolean

  (
    string: string,
    substring: string,
    fromPosition?: number,
  ): boolean

  <T> (
    element: T,
    fromIndex?: number,
  ): (array: unknown[]) => array is T[]


  <T> (
    array: T[],
    element: unknown,
    fromIndex?: number,
  ): element is T
}

export const includes = curry2Or3(
  <A extends ArrayLike> (
    arrayLike: A,
    member: unknown,
    fromPosition = 0,
  ): boolean => {
    return arrayLike.includes(
      member as ArrayLikeMember<A>,
      fromPosition,
    )
  },
)(
  (f, s, t) => {
    if (Array.isArray(f)) {
      if (typeof t === 'number') {
        return 3
      }

      return s !== undefined
    }

    return or(
      map(
        [s, t],
        ofType('number')),
    ) && 3
  },
) as IncludesFn
