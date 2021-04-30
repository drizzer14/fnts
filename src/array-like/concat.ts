import { curry2 } from '../.internal/curry-2'

import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface ConcatFn {
  <A extends ArrayLike> (
    items: ArrayLikeMember<A>[],
  ): (arrayLike: A) => A

  <A extends ArrayLike> (
    arrayLike: A,
    items: ArrayLikeMember<A>[],
  ): A
}

export const concat = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    items: ArrayLikeMember<A>[],
  ): A => arrayLike.concat(items as any) as A,
) as ConcatFn
