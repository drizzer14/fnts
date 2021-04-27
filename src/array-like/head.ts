import type { ArrayLike, ArrayLikeMember } from './array-like'

export interface HeadFn {
  (string: string): string

  <T extends readonly any[]> (tuple: T): T[0]

  <T> (array: T[]): T
}

export const head = (
  <A extends ArrayLike> ([h]: A): ArrayLikeMember<A> => h
) as HeadFn
