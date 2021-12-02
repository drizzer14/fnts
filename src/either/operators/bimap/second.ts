/**
 * @module Either Operators
 */

import { bifoldr } from '../bifold'
import { isRight } from '../guards'
import compose from '../../../compose'
import ternary from '../../../ternary'
import identity from '../../../identity'
import type { Either } from '../../either'
import right, { Right } from '../../right'
import type { Map } from '../../../types/map'
import permutation2 from '../../../permutation/permutation-2'

/**
 * Maps the right value of the provided `monad` to a new `Either` monad
 * with the same left value.
 */
export default function second<
  LeftValue,
  RightValue,
  NextRightValue
> (
  mapRight: Map<RightValue, NextRightValue>,
): (monad: Either<LeftValue, RightValue>) => Either<LeftValue, NextRightValue>

/**
 * Maps the right value of the provided `monad` to a new `Either` monad
 * with the same left value.
 */
export default function second<
  LeftValue,
  RightValue,
  NextRightValue
> (
  monad: Either<LeftValue, RightValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<LeftValue, NextRightValue>

export default function second (...args: [any, any?]): any {
  return permutation2(
    <
      LeftValue,
      RightValue,
      NextRightValue
    >(
      monad: Either<LeftValue, RightValue>,
      mapRight: Map<RightValue, NextRightValue>,
    ): Either<LeftValue, NextRightValue> => {
      return ternary(
        isRight,
        compose(right, mapRight, bifoldr) as Map<typeof monad, Right<NextRightValue>>,
        identity
      )(monad)
    }
  )(...args)
}
