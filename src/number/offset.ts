import { ltr } from '../order/lt'
import { identity } from '../identity'
import { curry2 } from '../.internal/curry-2'
import { ternary } from '../boolean/ternary'

import { add } from './add'
import { clamp } from './clamp'

export interface OffsetFn {
  (max: number): (x: number) => number

  (x: number, max: number): number
}

export const offset = curry2(
  (x: number, max: number) => {
    return clamp(
      ternary(
        ltr(0),
        add(max),
        identity,
      )(x),
      0,
      max,
    )
  },
) as OffsetFn
