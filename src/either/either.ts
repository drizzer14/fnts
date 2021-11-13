import left, { Left } from './left'
import right, { Right } from './right'

/**
 * Type constructor for `Either`.
 * Can be either `Right` of the value provided,
 * or `Left` of the error thrown.
 */
export type Either<LeftValue, RightValue> = Left<LeftValue> | Right<RightValue>

/**
 * Type constructor for `Either`.
 * Creates either `Right` of the value provided,
 * or `Left` of the error thrown.
 */
export default function either<LeftValue, RightValue> (
  value: () => Promise<RightValue>
): Promise<Either<LeftValue, RightValue>> {
  return value()
    .then(right)
    .catch(left)
}
