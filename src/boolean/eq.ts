import { curry } from '../function/curry'

export const eq = curry(
  <T> (a: T, b: T): boolean => {
    if (a === b) {
      return true
    }

    if (
      (Array.isArray(a) && Array.isArray(b)) ||
      (typeof a === 'object' && typeof b === 'object')
    ) {
      try {
        return JSON.stringify(a) === JSON.stringify(b)
      } catch {
        return false
      }
    }

    return false
  },
)
