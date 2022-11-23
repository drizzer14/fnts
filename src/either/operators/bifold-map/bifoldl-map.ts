/**
 * @module Either Operators
 */

import { isLeft } from '../guards'
import compose from '../../../compose'
import type { Left } from '../../left'
import type { Either } from '../../either'
import type { Map } from '../../../types/map'
import bifoldl, { Bifoldl } from '../bifold/bifoldl'
import permutation2 from '../../../permutation/permutation-2'

/**
 * Maps provided `monad`'s left value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldlMap<
  LeftValue,
  Value
> (
  map: Map<LeftValue, Value>
): (
  monad: Either<LeftValue, any>
) => Value | undefined

/**
 * Maps provided `monad`'s left value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldlMap<
  LeftValue,
  Value
> (
  monad: Either<LeftValue, any>,
  map: Map<LeftValue, Value>
): Value | undefined

/**
 * Maps provided `monad`'s left value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldlMap<
  Monad extends Left<any>,
  Value
> (
  map: Map<Bifoldl<Monad>, Value>
): (
  monad: Monad
) => Value

/**
 * Maps provided `monad`'s left value to a new value,
 * then returns it or `undefined`.
 */
export default function bifoldlMap<
  Monad extends Left<any>,
  Value
> (
  monad: Monad,
  map: Map<Bifoldl<Monad>, Value>
): Value

export default function bifoldlMap (...args: [any, any?]): any {
  return permutation2(
    <
      LeftValue,
      Value
    > (
      monad: Either<LeftValue, any>,
      map: Map<LeftValue, Value>
    ): Value | undefined => {
      return isLeft(monad)
        ? compose(map, bifoldl, monad)
        : undefined
    }
  )(...args)
}
