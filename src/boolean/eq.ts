import { curry } from '../function/curry'

export const eq = curry(
  <Value> (a: Value, b: Value): boolean => a === b
)
