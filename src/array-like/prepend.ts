import { curry2 } from '../.internal/curry-2'

import { concat } from './concat'
import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface PrependFn {
  (strings: string[]): (string: string) => string

  <T> (items: T[]): (array: T[]) => T[]

  (string: string, strings: string[]): string

  <T> (array: T[], items: T[]): T[]
}

export const prepend = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    items: ArrayLikeMember<A>[],
  ): A => concat(items as any, arrayLike as any) as A,
) as PrependFn
