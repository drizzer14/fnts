import { curry } from '../function/curry'

import { or } from './or'
import { and } from './and'

export const xor = curry(
  <A, B> (a: A, b: B): boolean => {
    return !and(a, b) && or(a, b)
  },
)
