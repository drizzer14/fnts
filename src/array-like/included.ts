import { or } from '../array/or'
import { map } from '../array/map'
import { ofType } from '../type/of-type'
import { curry2Or3 } from '../.internal/curry-2-or-3'

import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface IncludedFn {
  (
    string: string,
    fromPosition?: number,
  ): (substring: string) => boolean

  (
    substring: string,
    string: string,
    fromPosition?: number,
  ): boolean

  <T> (
    array: T[],
    fromIndex?: number,
  ): (element: unknown) => element is T[]

  <T> (
    element: unknown,
    array: T[],
    fromIndex?: number,
  ): element is T
}

export const included = curry2Or3(
  <A extends ArrayLike> (
    member: unknown,
    arrayLike: A,
    fromPosition = 0,
  ): boolean => {
    return arrayLike.includes(
      member as ArrayLikeMember<A>,
      fromPosition,
    )
  },
)(
  (_, s, t) => {
    if (Array.isArray(s)) {
      return typeof t === 'number'
    }

    return or(
      map(
        [s, t],
        ofType('number')),
    )
  },
) as IncludedFn
