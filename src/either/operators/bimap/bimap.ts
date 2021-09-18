import { isLeft } from '../guards'
import type { Either } from '../../either'
import type { Map } from '../../../.internal/map'
import permutationOf3 from '../../../.internal/permutation-of-3'

import first from './first'
import second from './second'

/**
 * Maps left and right values of the provided `monad` to a new `Either` monad.
 */
export function bimap<
  LeftValue,
  RightValue,
  NextLeftValue,
  NextRightValue
> (
  mapLeft: Map<LeftValue, NextLeftValue>,
  mapRight: Map<RightValue, NextRightValue>,
): (
  monad: Either<LeftValue, RightValue>
) => Either<NextLeftValue, NextRightValue>

/**
 * Maps left and right values of the provided `monad` to a new `Either` monad.
 */
export function bimap<
  LeftValue,
  RightValue,
  NextLeftValue,
  NextRightValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<NextLeftValue, NextRightValue>

export function bimap (...args: [any, any, any?]) {
  return permutationOf3(
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
  )(...args)
}

export default bimap
