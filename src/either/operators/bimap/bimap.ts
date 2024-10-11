/**
 * @module Either Operators
 */

import { isLeft } from '../guards'
import type { Either } from '../../either'
import type { Map } from '../../../types/map'
import permutation3 from '../../../permutation/permutation-3'

import first from './first'
import second from './second'

/**
 * Maps left and right values of the provided `monad` to a new `Either` monad.
 */
export default function bimap<
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
export default function bimap<
  LeftValue,
  RightValue,
  NextLeftValue,
  NextRightValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<NextLeftValue, NextRightValue>

export default function bimap (...args: [any, any, any?]): any {
  return permutation3(
    <
      LeftValue,
      RightValue,
      NextLeftValue,
      NextRightValue
    > (
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
