import { curry2 } from '../.internal/curry-2'

export interface FlatFn {
  (depth?: number): <T>(array: T[]) => T[]

  <T> (array: T[], depth?: number): T[]
}

export const flat = curry2(
  <T> (array: T[], depth?: number) => array.flat(depth ?? 1),
) as FlatFn
