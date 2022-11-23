/**
 * @module Either Operators
 */

import compose from '../../compose'
import identity from '../../identity'
import type { Map } from '../../types'
import type { Either } from '../either'
import permutation2 from '../../permutation/permutation-2'

import { bifoldr } from './bifold'
import { isRight } from './guards'

/**
 * Maps right value to a new monad returning it.
 */
export default function bindr<
  LeftValue,
  RightValue,
  NextRightValue
> (
  mapRight: Map<RightValue, Either<LeftValue, NextRightValue>>
): (
  monad: Either<LeftValue, RightValue>
) => Either<LeftValue, NextRightValue>

/**
 * Maps right value to a new monad returning it.
 */
export default function bindr<
  LeftValue,
  RightValue,
  NextRightValue
> (
  monad: Either<LeftValue, RightValue>,
  mapRight: Map<RightValue, Either<LeftValue, NextRightValue>>
): Either<LeftValue, NextRightValue>

export default function bindr (...args: [any, any?]): any {
  return permutation2(
    <
      LeftValue,
      RightValue,
      NextRightValue
    > (
      monad: Either<LeftValue, RightValue>,
      mapRight: Map<RightValue, Either<LeftValue, NextRightValue>>
    ): Either<LeftValue, NextRightValue> => {
      return isRight(monad)
        ? compose(mapRight, bifoldr, monad)
        : identity(monad)
    }
  )(...args)
}
