import type { Slice } from './slice'

export type Tail<T extends any[] | readonly any[]> = Slice<T, 1>

export const tail =
  <T extends any[] | readonly any[]> (list: T): Tail<T> => list.slice(1) as Tail<T>
