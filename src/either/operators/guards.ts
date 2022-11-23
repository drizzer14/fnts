/**
 * @module Either Operators
 */

import { Left, lid } from '../left'
import { Right, rid } from '../right'
import type { Either } from '../either'

/**
 * Type guard function to tell if the provided `value` is `Left`.
 */
export function isLeft<LeftValue> (
  value: any
): value is Left<LeftValue> {
  return Object.prototype.hasOwnProperty.call(value, lid)
}

/**
 * Type guard function to tell if the provided `value` is `Right`.
 */
export function isRight<RightValue> (
  value: any
): value is Right<RightValue> {
  return Object.prototype.hasOwnProperty.call(value, rid)
}

/**
 * Type guard function to tell if the provided `value` is `Either`.
 */
export function isEither<LeftValue, RightValue> (
  value: any
): value is Either<LeftValue, RightValue> {
  return isLeft(value) || isRight(value)
}
