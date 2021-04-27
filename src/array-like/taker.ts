import { neg } from '../number/neg'
import { curry2 } from '../.internal/curry-2'

import { slice } from './slice'
import type { ArrayLike } from './array-like'

export interface TakerFn {
  <A extends ArrayLike> (arrayLike: A, amount: number): A

  (amount: number): <A extends ArrayLike>(arrayLike: A) => A
}

export const taker = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    amount: number,
  ): A => {
    return slice(
      arrayLike as any,
      neg(amount),
      arrayLike.length,
    ) as A
  },
) as TakerFn
