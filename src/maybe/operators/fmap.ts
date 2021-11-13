import compose from '../../compose'
import identity from '../../identity'
import maybe, { Maybe } from '../maybe'
import type { Map } from '../../.internal/map'
import permutationOf2 from '../../.internal/permutation-of-2'

import fold from './fold'
import { isJust } from './guards'
import conditional from '../../conditional'

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export default function fmap<Value, NextValue = Value>(
  transition: Map<Value, NextValue>
): (monad: Maybe<Value>) => Maybe<NextValue>

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export default function fmap<Value, NextValue = Value>(
  monad: Maybe<Value>,
  transition: Map<Value, NextValue>
): Maybe<NextValue>

export default function fmap (...args: [any, any?]): any {
  return permutationOf2(
    <Value, NextValue>(
      monad: Maybe<Value>,
      transition: Map<Value, NextValue>
    ): Maybe<NextValue> => {
      return conditional(
        isJust,
        compose(maybe, transition, fold) as (monad: Maybe<Value>) => Maybe<NextValue>,
        identity
      )(monad)
    }
  )(...args)
}
