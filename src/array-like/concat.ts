import { curry2 } from '../.internal/curry-2'

import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface ConcatFn {
  (strings: string[]): (string: string) => string

  <T> (items: T[]): (array: T[]) => T[]

  (string: string, strings: string[]): string

  <T> (array: T[], items: T[]): T[]
}

export const concat = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    items: ArrayLikeMember<A>[],
  ): A => arrayLike.concat(items as any) as A,
) as ConcatFn
