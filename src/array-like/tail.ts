import { slice } from './slice'
import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface TailFn {
  (string: string): string

  <T> (array: T[]): T[]
}

export const tail = (
  <A extends ArrayLike> (arrayLike: A): ArrayLikeMember<A> => {
    return slice(arrayLike as any[], 1) as ArrayLikeMember<A>
  }
) as TailFn
