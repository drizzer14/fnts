import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'
import { Maybe, just, nothing } from '../monad/maybe'

import type { ArrayLike } from './array-like'

export interface LastIndexOfFromFn {
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

export const lastIndexOfFrom = curry3(
  <A extends ArrayLike> (
    arrayLike: A,
    member: unknown,
    fromIndex: number,
  ): Maybe<number> => {
    const lastIndex = arrayLike.lastIndexOf(member as any, fromIndex)

    return lastIndex < 0
      ? nothing()
      : just(lastIndex)
  },
) as LastIndexOfFromFn

export interface LastIndexOfFn {
  (
    member: unknown,
  ): <A extends ArrayLike> (arrayLike: A) => Maybe<number>

  <A extends ArrayLike> (arrayLike: A[], member: unknown): Maybe<number>
}

export const lastIndexOf = curry2(
  <A extends ArrayLike> (
    arrayLike: A,
    member: unknown,
  ): Maybe<number> => lastIndexOfFrom(arrayLike as any, member, arrayLike.length - 1),
) as LastIndexOfFn
