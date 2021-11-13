import left from './left'
import right from './right'
import type { Either } from './either'

/**
 * Type constructor for `Either`.
 * Creates either `Right` of the value provided,
 * or `Left` of the thrown error.
 */
export default function eitherSync<LeftValue, RightValue> (
  value: () => RightValue
): Either<LeftValue, RightValue> {
  try {
    return right(value())
  } catch (error) {
    return left(error as LeftValue)
  }
}
