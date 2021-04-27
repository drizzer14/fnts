import { offset } from '../number/offset'
import { curry2 } from '../.internal/curry-2'

import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface AtFn {
  (position: number): <A extends ArrayLike>(arrayLike: A) => ArrayLikeMember<A>

  <A extends ArrayLike> (arrayLike: A, position: number): ArrayLikeMember<A>
}

export const at = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    position: number,
  ): ArrayLikeMember<A> => {
    return arrayLike[offset(position, arrayLike.length)]
  },
) as AtFn
