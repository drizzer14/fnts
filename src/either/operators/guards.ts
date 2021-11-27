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
