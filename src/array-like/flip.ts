import { join } from '../array/join'
import { foldr } from '../array/foldr'
import { split } from '../string/split'
import { compose } from '../function/compose'

import type { ArrayLike } from './array-like'

export interface FlipFn {
  (string: string): string

  <T> (array: T[]): T[]
}

export const flip = (<A extends ArrayLike> (arrayLike: A): A => {
  return (typeof arrayLike === 'string'
    ? compose(
      join(''),
      compose(flip, split('')),
    )(arrayLike as string)
    : foldr<any, any[]>(
      (current, accumulator) => accumulator.concat(current),
      [],
    )(arrayLike as any[])) as A
}) as FlipFn
