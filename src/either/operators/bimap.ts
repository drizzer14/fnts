import compose from '../../compose'
import type { Map } from '../../.internal/map'
import { Either, Left, left, Right, right } from '../either'
import permutationOf2 from '../../.internal/permutation-of-2'
import permutationOf3 from '../../.internal/permutation-of-3'

import { isLeft, isRight } from './guards'
import { bifoldl, bifoldr } from './bifold'

/**
 * @internal
 */
interface First {
  <
    LeftValue,
    RightValue,
    NextLeftValue
  >(
    mapLeft: Map<LeftValue, NextLeftValue>,
  ): (monad: Either<LeftValue, RightValue>) => Either<NextLeftValue, RightValue>

  <
    LeftValue,
    RightValue,
    NextLeftValue
    >(
    monad: Either<LeftValue, RightValue>,
    mapLeft: Map<LeftValue, NextLeftValue>,
  ): Either<NextLeftValue, RightValue>
}

/**
 * Maps the left value of the provided `monad` to a new `Either` monad
 * with the same right value.
 */
export const first = permutationOf2(
  <
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
) as First

/**
 * @internal
 */
interface Second {
  <
    LeftValue,
    RightValue,
    NextRightValue
  >(
    mapRight: Map<RightValue, NextRightValue>,
  ): (monad: Either<LeftValue, RightValue>) => Either<LeftValue, NextRightValue>

  <
    LeftValue,
    RightValue,
    NextRightValue
    >(
    monad: Either<LeftValue, RightValue>,
    mapRight: Map<RightValue, NextRightValue>,
  ): Either<LeftValue, NextRightValue>
}

/**
 * Maps the right value of the provided `monad` to a new `Either` monad
 * with the same left value.
 */
export const second = permutationOf2(
  <
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
) as Second

/**
 * @internal
 */
interface Bimap {
  <
    LeftValue,
    RightValue,
    NextLeftValue,
    NextRightValue
  >(
    mapLeft: Map<LeftValue, NextLeftValue>,
    mapRight: Map<RightValue, NextRightValue>,
  ): (
    monad: Either<LeftValue, RightValue>
  ) => Either<NextLeftValue, NextRightValue>

  <
    LeftValue,
    RightValue,
    NextLeftValue,
    NextRightValue
  >(
    monad: Either<LeftValue, RightValue>,
    mapLeft: Map<LeftValue, NextLeftValue>,
    mapRight: Map<RightValue, NextRightValue>,
  ): Either<NextLeftValue, NextRightValue>
}

/**
 * Maps left and right values of the provided `monad` to a new `Either` monad.
 */
export const bimap = permutationOf3(
  <
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
) as Bimap

export default bimap
