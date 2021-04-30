import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'
import { Maybe, just, nothing } from '../monad/maybe'

import type { ArrayLike } from './array-like'

export interface IndexOfFromFn {
  (
    member: unknown,
    fromIndex: number,
  ): <A extends ArrayLike> (arrayLike: A[]) => Maybe<number>

  <A extends ArrayLike> (
    arrayLike: A[],
    member: unknown,
    fromIndex: number,
  ): Maybe<number>
}

export const indexOfFrom = curry3(
  <A extends ArrayLike> (
    arrayLike: A,
    member: unknown,
    fromIndex: number,
  ): Maybe<number> => {
    const index = arrayLike.indexOf(member as any, fromIndex)

    return index < 0
      ? nothing()
      : just(index)
  },
) as IndexOfFromFn

export interface IndexOfFn {
  (
    member: unknown,
  ): <A extends ArrayLike> (arrayLike: A) => Maybe<number>

  <A extends ArrayLike> (arrayLike: A[], member: unknown): Maybe<number>
}

export const indexOf = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    member: unknown,
  ): Maybe<number> => indexOfFrom(arrayLike as any, member, 0),
) as IndexOfFn
