import compose from '../../compose'
import type { Either } from '../either'
import conditional from '../../conditional'
import type { Map } from '../../.internal/map'
import permutationOf3 from '../../.internal/permutation-of-3'

import { isLeft } from './guards'
import { bifoldl, bifoldr } from './bifold'

/**
 * Maps left and right values of the provided `monad` to a value,
 * then returns it.
 */
export default function bifoldMap<
  LeftValue,
  RightValue,
  MappedValue
> (
  mapLeft: Map<LeftValue, MappedValue>,
  mapRight: Map<RightValue, MappedValue>,
): (
  monad: Either<LeftValue, RightValue>
) => MappedValue

/**
 * Maps left and right values of the provided `monad` to a value,
 * then returns it.
 */
export default function bifoldMap<
  LeftValue,
  RightValue,
  MappedValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, MappedValue>,
  mapRight: Map<RightValue, MappedValue>,
): MappedValue

export default function bifoldMap (...args: [any, any, any?]): any {
  return permutationOf3(
    <
      LeftValue,
      RightValue,
      MappedValue
    >(
      monad: Either<LeftValue, RightValue>,
      mapLeft: Map<LeftValue, MappedValue>,
      mapRight: Map<RightValue, MappedValue>,
    ): MappedValue => {
      return conditional(
        isLeft,
        compose(mapLeft, bifoldl),
        compose(mapRight, bifoldr)
      )(monad)
    }
  )(...args)
}
