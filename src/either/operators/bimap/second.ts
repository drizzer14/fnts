import { bifoldr } from '../bifold'
import { isRight } from '../guards'
import compose from '../../../compose'
import type { Either } from '../../either'
import right, { Right } from '../../right'
import type { Map } from '../../../.internal/map'
import permutationOf2 from '../../../.internal/permutation-of-2'

/**
 * Maps the right value of the provided `monad` to a new `Either` monad
 * with the same left value.
 */
export function second<
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
export function second<
  LeftValue,
  RightValue,
  NextRightValue
> (
  monad: Either<LeftValue, RightValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<LeftValue, NextRightValue>

export function second (...args: [any, any?]) {
  return permutationOf2(
    <
      LeftValue,
      RightValue,
      NextRightValue
    >(
      monad: Either<LeftValue, RightValue>,
      mapRight: Map<RightValue, NextRightValue>,
    ): Either<LeftValue, NextRightValue> => {
      return isRight(monad)
        ? compose(
          right, mapRight, bifoldr
        )(monad) as Right<NextRightValue>
        : monad
    }
  )(...args)
}

export default second
