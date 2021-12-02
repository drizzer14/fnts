/**
 * @module Either Operators
 */

import { isLeft } from '../guards'
import { bifoldl } from '../bifold'
import compose from '../../../compose'
import ternary from '../../../ternary'
import left, { Left } from '../../left'
import identity from '../../../identity'
import type { Either } from '../../either'
import type { Map } from '../../../types/map'
import permutation2 from '../../../permutation/permutation-2'

/**
 * Maps the left value of the provided `monad` to a new `Either` monad
 * with the same right value.
 */
export default function first<
  LeftValue,
  RightValue,
  NextLeftValue
> (
  mapLeft: Map<LeftValue, NextLeftValue>,
): (monad: Either<LeftValue, RightValue>) => Either<NextLeftValue, RightValue>

/**
 * Maps the left value of the provided `monad` to a new `Either` monad
 * with the same right value.
 */
export default function first<
  LeftValue,
  RightValue,
  NextLeftValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
): Either<NextLeftValue, RightValue>

export default function first (...args: [any, any?]): any {
  return permutation2(
    <
      LeftValue,
      RightValue,
      NextLeftValue
    >(
      monad: Either<LeftValue, RightValue>,
      mapLeft: Map<LeftValue, NextLeftValue>,
    ): Either<NextLeftValue, RightValue> => {
      return ternary(
        isLeft,
        compose(left, mapLeft, bifoldl) as Map<typeof monad, Left<NextLeftValue>>,
        identity
      )(monad)
    }
  )(...args)
}
