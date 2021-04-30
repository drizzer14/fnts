import { curry2 } from '../.internal/curry-2'

import { concat } from './concat'
import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface PrependFn {
  <A extends ArrayLike> (items: ArrayLikeMember<A>[]): (arrayLike: A) => A

  <A extends ArrayLike> (arrayLike: A, items: ArrayLikeMember<A>[]): A
}

export const prepend = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    items: ArrayLikeMember<A>[],
  ): A => concat(items as any, arrayLike as any) as A,
) as PrependFn
