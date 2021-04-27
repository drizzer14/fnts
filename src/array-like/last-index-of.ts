import { or } from '../array/or'
import { map } from '../array/map'
import { ofType } from '../type/of-type'
import { curry2Or3 } from '../.internal/curry-2-or-3'
import { Maybe, just, nothing } from '../monad/maybe'

import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface LastIndexOfFn {
  (
    substring: string,
    fromPosition?: number,
  ): (string: string) => Maybe<number>

  (
    string: string,
    substring: string,
    fromPosition?: number,
  ): Maybe<number>

  <T> (
    element: unknown,
    fromIndex?: number,
  ): (arrayLike: T[]) => Maybe<number>

  <T> (
    arrayLike: T[],
    element: unknown,
    fromIndex?: number,
  ): Maybe<number>
}

export const lastIndexOf = curry2Or3(
  <A extends ArrayLike> (
    arrayLike: A,
    element: ArrayLikeMember<A>,
    fromIndex?: number,
  ) => {
    const index = arrayLike.lastIndexOf(
      element,
      fromIndex ?? arrayLike.length
    )

    return index < 0
      ? nothing()
      : just(index)
  },
)(
  (f, s, t) => {
    if (Array.isArray(f)) {
      return typeof t === 'number'
    }

    return or(
      map(
        [s, t],
        ofType('number')),
    )
  },
) as LastIndexOfFn
