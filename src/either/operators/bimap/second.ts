/**
 * @module Either Operators
 */

import { bifoldr } from '../bifold'
import { isRight } from '../guards'
import compose from '../../../compose'
import identity from '../../../identity'
import type { Either } from '../../either'
import right, { Right } from '../../right'
import type { Map } from '../../../types/map'
import permutation2 from '../../../permutation/permutation-2'

export type Second<Monad extends Either<any, any>> =
  Monad extends Right<infer RightValue>
    ? RightValue
    : Monad extends Either<any, infer RightValue>
      ? RightValue
      : never

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
    > (
      monad: Either<LeftValue, RightValue>,
      mapRight: Map<RightValue, NextRightValue>,
    ): Either<LeftValue, NextRightValue> => {
      return isRight(monad)
        ? compose(
          compose(right, mapRight),
          bifoldr,
          monad
        )
        : identity(monad)
    }
  )(...args)
}
