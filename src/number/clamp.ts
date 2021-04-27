import { curry3 } from '../.internal/curry-3'

export interface ClampFn {
  (min: number, max: number): (x: number) => number

  (x: number, min: number, max: number): number
}

export const clamp = curry3(
  (x: number, min: number, max: number): number => {
    return Math.max(Math.min(x, max), min)
  },
) as ClampFn
