import { curry } from '../function/curry'

import { div } from './div'

export const safeDiv = curry(
  (a: number, b: number): number => {
    return div(a, b || 1)
  },
)

export const safeDivBy = (b: number, a: number): number => safeDiv(a, b)
