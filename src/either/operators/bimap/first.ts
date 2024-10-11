/**
 * @module Either Operators
 */

import { isLeft } from '../guards'
import compose from '../../../compose'
import bifoldl from '../bifold/bifoldl'
import left, { Left } from '../../left'
import identity from '../../../identity'
import type { Either } from '../../either'
import type { Map } from '../../../types/map'
import permutation2 from '../../../permutation/permutation-2'

export type First<Monad extends Either<any, any>> =
  Monad extends Left<infer LeftValue>
    ? LeftValue
    : Monad extends Either<infer LeftValue, any>
      ? LeftValue
      : never

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
    > (
      monad: Either<LeftValue, RightValue>,
      mapLeft: Map<LeftValue, NextLeftValue>,
    ): Either<NextLeftValue, RightValue> => {
      return isLeft(monad)
        ? compose(
          compose(left, mapLeft),
          bifoldl,
          monad
        )
        : identity(monad)
    }
  )(...args)
}
