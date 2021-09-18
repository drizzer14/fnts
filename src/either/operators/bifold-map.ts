import compose from '../../compose'
import type { Either } from '../either'
import type { Map } from '../../.internal/map'
import permutationOf3 from '../../.internal/permutation-of-3'

import { isLeft } from './guards'
import { bifoldl, bifoldr } from './bifold'

/**
 * Maps left and right values of the provided `monad` to a value,
 * then returns it.
 */
export function bifoldMap<
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
export function bifoldMap<
  LeftValue,
  RightValue,
  MappedValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, MappedValue>,
  mapRight: Map<RightValue, MappedValue>,
): MappedValue

export function bifoldMap (...args: [any, any, any?]) {
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
      return isLeft(monad)
        ? compose(mapLeft, bifoldl)(monad)
        : compose(mapRight, bifoldr)(monad)
    }
  )(...args)
}

export default bifoldMap
