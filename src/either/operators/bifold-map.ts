/**
 * @module Either Operators
 */

import compose from '../../compose'
import ternary from '../../ternary'
import type { Either } from '../either'
import type { Map } from '../../types/map'
import permutation3 from '../../permutation/permutation-3'

import { isEither, isLeft } from './guards';
import bifold, { bifoldl, bifoldr } from './bifold'

/**
 * Maps provided `monad` to a value,
 * then returns it.
 */
export default function bifoldMap<
  LeftValue,
  RightValue,
  Value
> (
  map: Map<LeftValue | RightValue, Value>
): (
  monad: Either<LeftValue, RightValue>
) => Value

/**
 * Maps provided `monad` to a value,
 * then returns it.
 */
export default function bifoldMap<
  LeftValue,
  RightValue,
  Value
> (
  monad: Either<LeftValue, RightValue>,
  map: Map<LeftValue | RightValue, Value>
): Value

/**
 * Maps left and right values of the provided `monad` to a value,
 * then returns it.
 */
export default function bifoldMap<
  LeftValue,
  RightValue,
  Value
> (
  mapLeft: Map<LeftValue, Value>,
  mapRight: Map<RightValue, Value>,
): (
  monad: Either<LeftValue, RightValue>
) => Value

/**
 * Maps left and right values of the provided `monad` to a value,
 * then returns it.
 */
export default function bifoldMap<
  LeftValue,
  RightValue,
  Value
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, Value>,
  mapRight: Map<RightValue, Value>,
): Value

export default function bifoldMap (...args: [any, any?, any?]): any {
  if (args.length === 1) {
    return <
      LeftValue,
      RightValue,
      Value
    > (monad: Either<LeftValue, RightValue>): Value => {
      return compose(args[0], bifold)(monad);
    }
  }

  if (args.length === 2 && isEither(args[0])) {
    return compose(args[1], bifold)(args[0])
  }

  return permutation3(
    <
      LeftValue,
      RightValue,
      Value
    > (
      monad: Either<LeftValue, RightValue>,
      mapLeft: Map<LeftValue, Value>,
      mapRight: Map<RightValue, Value>,
    ): Value => {
      return ternary(
        isLeft,
        compose(mapLeft, bifoldl),
        compose(mapRight, bifoldr)
      )(monad)
    }
  )(...args)
}
