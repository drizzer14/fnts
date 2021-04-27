import { curry } from '../function/curry'

export const and = curry(
  <A, B> (a: A, b: B): boolean => {
    return Boolean(a) && Boolean(b)
  },
)
