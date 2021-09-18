import { isLeft } from '../guards'
import { bifoldl } from '../bifold'
import compose from '../../../compose'
import left, { Left } from '../../left'
import type { Either } from '../../either'
import type { Map } from '../../../.internal/map'
import permutationOf2 from '../../../.internal/permutation-of-2'

/**
 * Maps the left value of the provided `monad` to a new `Either` monad
 * with the same right value.
 */
export function first<
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
export function first<
  LeftValue,
  RightValue,
  NextLeftValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
): Either<NextLeftValue, RightValue>

export function first (...args: [any, any?]) {
  return permutationOf2(
    <
      LeftValue,
      RightValue,
      NextLeftValue
    >(
      monad: Either<LeftValue, RightValue>,
      mapLeft: Map<LeftValue, NextLeftValue>,
    ): Either<NextLeftValue, RightValue> => {
      return isLeft(monad)
        ? compose(
          left, mapLeft, bifoldl
        )(monad) as Left<NextLeftValue>
        : monad
    }
  )(...args)
}

export default first
