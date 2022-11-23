/**
 * @module Either Operators
 */

import { Right } from '../../right';
import { isRight } from '../guards';
import compose from '../../../compose'
import type { Either } from '../../either'
import type { Map } from '../../../types/map'
import bifoldr, { Bifoldr } from '../bifold/bifoldr';
import permutation2 from '../../../permutation/permutation-2'

/**
 * Maps provided `monad`'s right value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldrMap<
  RightValue,
  Value
> (
  map: Map<RightValue, Value>
): (
  monad: Either<any, RightValue>
) => Value | undefined

/**
 * Maps provided `monad`'s right value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldrMap<
  RightValue,
  Value
> (
  monad: Either<any, RightValue>,
  map: Map<RightValue, Value>
): Value | undefined

/**
 * Maps provided `monad`'s right value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldrMap<
  Monad extends Right<any>,
  Value
> (
  map: Map<Bifoldr<Monad>, Value>
): (
  monad: Monad
) => Value

/**
 * Maps provided `monad`'s right value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldrMap<
  Monad extends Right<any>,
  Value
> (
  monad: Monad,
  map: Map<Bifoldr<Monad>, Value>
): Value

export default function bifoldrMap (...args: [any, any?]): any {
  return permutation2(
    <
      RightValue,
      Value
    > (
      monad: Either<any, RightValue>,
      map: Map<RightValue, Value>
    ): Value | undefined => {
      return isRight(monad)
        ? compose(map, bifoldr, monad)
        : undefined
    }
  )(...args)
}
