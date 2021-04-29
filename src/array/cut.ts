import { sliceTo } from '../array-like/slice'
import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface CutFn {
  (start: number): <T>(array: T[]) => T[]

  <T> (array: T[], start: number): T[]
}

export const cut = curry2(
  <T> (
    array: T[],
    start: number,
  ) => sliceTo(array, start, start + 1),
) as CutFn

export interface CutNFn {
  (start: number, count: number): <T>(array: T[]) => T[]

  <T> (array: T[], start: number, count: number): T[]
}

export const cutN = curry3(
  <T> (
    array: T[],
    start: number,
    count: number,
  ) => sliceTo(array, start, start + count),
) as CutNFn
