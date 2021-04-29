import { includes } from '../array/includes'

import { not } from './not'

export const nnot = <T> (x: T): boolean => {
  if (includes([0, ''], x)) {
    return false
  }

  return not(x)
}
