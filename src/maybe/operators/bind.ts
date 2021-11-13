import compose from '../../compose'
import type { Maybe } from '../maybe'
import identity from '../../identity'
import type { Map } from '../../.internal/map'
import permutationOf2 from '../../.internal/permutation-of-2'

import fold from './fold'
import { isJust } from './guards'
import { conditional } from '../..'

/**
 * Binds the value of the `monad` to new monad created
 * by the `transition` function.
 */
export default function bind<Value, NextValue> (
  transition: Map<Value, Maybe<NextValue>>
): (monad: Maybe<Value>) => Maybe<NextValue>

/**
 * Binds the value of the `monad` to new monad created
 * by the `transition` function.
 */
export default function bind<Value, NextValue> (
  monad: Maybe<Value>,
  transition: Map<Value, Maybe<NextValue>>
): Maybe<NextValue>

export default function bind (...args: [any, any?]): any {
  return permutationOf2(
    <Value, NextValue>(
      monad: Maybe<Value>,
      transition: Map<Value, Maybe<NextValue>>
    ): Maybe<NextValue> => {
      return conditional(
        isJust,
        compose(transition, fold),
        identity
      )(monad)
    }
  )(...args)
}
