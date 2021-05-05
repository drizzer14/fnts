import { curry2 } from '../.internal/curry-2'

import { sliceTo } from './slice'
import type { ArrayLike } from './array-like'

export interface TakelFn {
  <A extends ArrayLike> (arrayLike: A, amount: number): A

  (amount: number): <A extends ArrayLike>(arrayLike: A) => A
}

export const takel = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    amount: number
  ): A => {
    return sliceTo(arrayLike as any[], 0, amount) as A
  },
) as TakelFn
