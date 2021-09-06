import compose from '../../compose'
import type { Either } from '../either'
import type { Map } from '../../.internal/map'
import permutationOf3 from '../../.internal/permutation-of-3'

import { isLeft } from './guards'
import { bifoldl, bifoldr } from './bifold'

/**
 * @internal
 */
interface BifoldMap {
  <
    LeftValue,
    RightValue,
    MappedValue
  >(
    mapLeft: Map<LeftValue, MappedValue>,
    mapRight: Map<RightValue, MappedValue>,
  ): (
    monad: Either<LeftValue, RightValue>
  ) => MappedValue

  <
    LeftValue,
    RightValue,
    MappedValue
  >(
    monad: Either<LeftValue, RightValue>,
    mapLeft: Map<LeftValue, MappedValue>,
    mapRight: Map<RightValue, MappedValue>,
  ): MappedValue
}

/**
 * Maps left and right values of the provided `monad` to a value,
 * then returns it.
 */
export const bifoldMap = permutationOf3(
  <
    LeftValue,
    RightValue,
    MappedValue
  >(
    monad: Either<LeftValue, RightValue>,
    mapLeft: Map<LeftValue, MappedValue>,
    mapRight: Map<RightValue, MappedValue>,
  ): MappedValue => {
    return isLeft(monad)
      ? compose(mapLeft, bifoldl)(monad)
      : compose(mapRight, bifoldr)(monad)
  }
) as BifoldMap

export default bifoldMap