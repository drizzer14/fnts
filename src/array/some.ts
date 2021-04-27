import { and } from '../boolean/and'
import { ofType } from '../type/of-type'
import { curry2Or3 } from '../.internal/curry-2-or-3'

import { map } from './map'
import type { Predicate } from './array-callback'

export interface SomeFn {
  <T> (predicate: Predicate<T>, fromIndex?: number): (array: T[]) => boolean

  <T> (array: T[], predicate: Predicate<T>, fromIndex?: number): boolean
}

export const some = curry2Or3(
  <T> (array: T[], predicate: Predicate<T>, fromIndex = 0): boolean => {
    return array.some(predicate, fromIndex)
  },
)(
  (f, s, t) => {
    return map(
      map(
        [f, s],
        ofType('function'),
      ),
      and(t !== undefined),
    ).some(Boolean) && 3
  }
) as SomeFn
