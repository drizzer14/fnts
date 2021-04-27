import type { Slice } from '../tuple'

import { slice } from './slice'
import type { ArrayLike, ArrayLikeMember } from './array-like'

export type Tail<T extends readonly any[]> = Slice<T, 1>

export interface TailFn {
  (string: string): string

  <T> (array: T[]): T[]
}

export const tail = (
  <A extends ArrayLike> (arrayLike: A): ArrayLikeMember<A> => {
    return slice(arrayLike as any[], 1) as ArrayLikeMember<A>
  }
) as TailFn
