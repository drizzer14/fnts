import { curry } from '../function/curry'

export const or = curry(
  <A, B> (a: A, b: B): boolean => {
    return Boolean(a) || Boolean(b)
  },
)
