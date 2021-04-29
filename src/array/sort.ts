import { compose, Curry, curry } from '../function'
import { curry2 } from '../.internal/curry-2'

import type { Comparator } from './array-callback'

export interface SortFn {
  <T> (comparator: Comparator<T>): (array: T[]) => T[]

  <T> (array: T[], comparator: Comparator<T>): T[]
}

export const sort = curry2(
  <T> (array: T[], comparator: Comparator<T>) => {
    return array.sort(
      compose<[Curry<(a: T, b: T) => number>, Comparator<T>]>(
        comparator,
        curry,
      ),
    )
  },
) as SortFn
