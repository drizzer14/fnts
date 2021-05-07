import type { Slice } from './slice'

export type Tail<T extends any[]> = Slice<T, 1>

export const tail =
  <T extends any[]> (array: T): Tail<T> => array.slice(1) as Tail<T>
