import compose from '../../compose'
import type { Map } from '../../.internal/map'
import { Either, Left, left, Right, right } from '../either'

import { isLeft, isRight } from './guards'
import { bifoldl, bifoldr } from './bifold'

export const first = <
  LeftValue,
  RightValue,
  NextLeftValue
>(
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
): Either<NextLeftValue, RightValue> => {
  return isLeft(monad)
    ? compose(left, mapLeft, bifoldl)(monad) as Left<NextLeftValue>
    : monad
}

export const second = <
  LeftValue,
  RightValue,
  NextRightValue
>(
  monad: Either<LeftValue, RightValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<LeftValue, NextRightValue> => {
  return isRight(monad)
    ? compose(right, mapRight, bifoldr)(monad) as Right<NextRightValue>
    : monad
}

export const bimap = <
  LeftValue,
  RightValue,
  NextLeftValue,
  NextRightValue
>(
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<NextLeftValue, NextRightValue> => {
  return isLeft(monad)
    ? first(monad, mapLeft)
    : second(monad, mapRight)
}
