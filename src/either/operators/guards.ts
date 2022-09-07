/**
 * @module Either Operators
 */

import { Left, lid } from '../left'
import { Right, rid } from '../right'
import type { Either } from '../either'

/**
 * Type guard function to tell if the provided `monad` is `Left`.
 */
export function isLeft<LeftValue> (
  monad: Either<LeftValue, any>
): monad is Left<LeftValue> {
  return Object.prototype.hasOwnProperty.call(monad, lid)
}

/**
 * Type guard function to tell if the provided `monad` is `Right`.
 */
export function isRight<RightValue> (
  monad: Either<any, RightValue>
): monad is Right<RightValue> {
  return Object.prototype.hasOwnProperty.call(monad, rid)
}

/**
 * Type guard function to tell if the provided `value` is `Either`.
 */
export function isEither<LeftValue, RightValue> (
  value: any
): value is Either<LeftValue, RightValue> {
  return isLeft(value) || isRight(value)
}
