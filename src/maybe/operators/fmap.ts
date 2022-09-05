/**
 * @module Maybe Operators
 */

import compose from '../../compose'
import identity from '../../identity'
import maybe, { Maybe } from '../maybe'
import type { Map } from '../../types/map'
import permutation2 from '../../permutation/permutation-2'

import fold from './fold'
import { isJust } from './guards'
import ternary from '../../ternary'

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export default function fmap<Value, NextValue = Value>(
  transition: Map<Value, NextValue>
): (monad: Maybe<Value>) => Maybe<NonNullable<NextValue>>

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export default function fmap<Value, NextValue = Value>(
  monad: Maybe<Value>,
  transition: Map<Value, NextValue>
): Maybe<NonNullable<NextValue>>

export default function fmap (...args: [any, any?]): any {
  return permutation2(
    <Value, NextValue>(
      monad: Maybe<Value>,
      transition: Map<Value, NextValue>
    ): Maybe<NonNullable<NextValue>> => {
      return ternary(
        isJust,
        compose(maybe, transition, fold),
        identity
      )(monad) as Maybe<NonNullable<NextValue>>
    }
  )(...args)
}
