/**
 * @module Maybe Operators
 */

import compose from '../../compose'
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
): (monad: Maybe<Value>) => Maybe<NextValue>

/**
 * Binds the value of the `monad` to new monad created
 * by the `transition` function.
 */
export default function bind<Value, NextValue> (
  monad: Maybe<Value>,
  map: Map<Value, Maybe<NextValue>>
): Maybe<NextValue>

export default function bind (...args: [any, any?]): any {
  return permutation2(
    <Value, NextValue>(
      monad: Maybe<Value>,
      map: Map<Value, Maybe<NextValue>>
    ): Maybe<NextValue> => {
      return isJust(monad)
        ? compose(map, fold, monad)
        : identity(monad)
    }
  )(...args)
}
