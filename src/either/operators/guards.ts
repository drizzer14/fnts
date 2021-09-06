import { Either, Left, lid, Right, rid } from '../either'

/**
 * Type guard function to tell if the provided `monad` is `Left`.
 */
export const isLeft = <LeftValue>(
  monad: Either<LeftValue, any>
): monad is Left<LeftValue> => {
  return Object.prototype.hasOwnProperty.call(monad, lid)
}

/**
 * Type guard function to tell if the provided `monad` is `Right`.
 */
export const isRight = <RightValue>(
  monad: Either<any, RightValue>
): monad is Right<RightValue> => {
  return Object.prototype.hasOwnProperty.call(monad, rid)
}
