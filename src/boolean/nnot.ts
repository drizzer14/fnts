import { not } from './not'

export const nnot = <Value> (x: Value): boolean => {
  if ([0, ''].includes(x as any)) {
    return false
  }

  return not(x)
}
