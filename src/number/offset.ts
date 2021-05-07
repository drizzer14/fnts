import { lt } from '../ord/lt'
import { identity } from '../identity'
import { ternary } from '../boolean/ternary'
import { permutationOf2 } from '../.internal/permutation-of-2'

import { add } from './add'
import { clamp } from './clamp'

export interface OffsetFn {
  (max: number): (number: number) => number

  (number: number, max: number): number
}

export const offset = permutationOf2(
  (number: number, max: number) => {
    return clamp(
      ternary(
        lt(0),
        add(max),
        identity,
      )(number),
      0,
      max,
    )
  },
) as OffsetFn
