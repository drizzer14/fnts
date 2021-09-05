import { Either, Left, lid, Right, rid } from '../either'

export const isLeft = <LeftValue>(
  monad: Either<LeftValue, any>
): monad is Left<LeftValue> => {
  return Object.prototype.hasOwnProperty.call(monad, lid)
}

export const isRight = <RightValue>(
  monad: Either<any, RightValue>
): monad is Right<RightValue> => {
  return Object.prototype.hasOwnProperty.call(monad, rid)
}
