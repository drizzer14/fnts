/**
 * @module Maybe Operators
 */

import compose from '../../compose'
import ternary from '../../ternary'
import identity from '../../identity'
import type { Maybe } from '../maybe'
import type { Map } from '../../types/map'
import permutation2 from '../../permutation/permutation-2'

import fold from './fold'
import { isJust } from './guards'

/**
 * Binds the value of the `monad` to new monad created
 * by the `transition` function.
 */
export default function bind<Value, NextValue> (
  map: Map<Value, Maybe<NextValue>>
): (monad: Maybe<Value>) => Maybe<NonNullable<NextValue>>

/**
 * Binds the value of the `monad` to new monad created
 * by the `transition` function.
 */
export default function bind<Value, NextValue> (
  monad: Maybe<Value>,
  map: Map<Value, Maybe<NextValue>>
): Maybe<NonNullable<NextValue>>

export default function bind (...args: [any, any?]): any {
  return permutation2(
    <Value, NextValue>(
      monad: Maybe<Value>,
      map: Map<Value, Maybe<NextValue>>
    ): Maybe<NonNullable<NextValue>> => {
      return ternary(
        isJust,
        compose(map, fold),
        identity
      )(monad) as Maybe<NonNullable<NextValue>>
    }
  )(...args)
}
