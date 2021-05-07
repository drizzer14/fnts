import type { Slice } from './slice'

export type Tail<T extends any[]> = Slice<T, 1>

export const tail =
  <T extends any[]> (list: T): Tail<T> => list.slice(1) as Tail<T>
