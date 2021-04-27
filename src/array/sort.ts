import { curry2 } from '../.internal/curry-2'
import { compose, curry } from '../function'
import type { Comparator } from './array-callback'

export interface SortFn {
  <T> (comparator: Comparator<T>): (array: T[]) => T[]

  <T> (array: T[], comparator: Comparator<T>): T[]
}

export const sort = curry2(
  <T> (array: T[], comparator: Comparator<T>) => {
    return array.sort(
      compose<Comparator<T>, Comparator<T>>(
        comparator,
        curry,
      ),
    )
  },
) as SortFn
