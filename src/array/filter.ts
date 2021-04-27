import { curry2 } from '../.internal/curry-2'

import type { Predicate } from './array-callback'

export interface FilterFn {
  <T> (predicate: Predicate<T>): (array: T[]) => T[]

  <T> (array: T[], predicate: Predicate<T>): T[]
}

/**
 * @internal
 */
export const filter = curry2(
  <T> (array: T[], predicate: Predicate<T>) => array.filter(predicate),
) as FilterFn
