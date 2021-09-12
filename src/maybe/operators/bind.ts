import compose from '../../compose'
import type { Maybe } from '../maybe'
import type { Map } from '../../.internal/map'
import permutationOf2 from '../../.internal/permutation-of-2'

import { fold } from './fold'
import { isJust } from './guards'

interface Bind {
  <Value, NextValue> (
    transition: Map<Value, Maybe<NextValue>>
  ): (monad: Maybe<Value>) => Maybe<NextValue>

  <Value, NextValue>(
    monad: Maybe<Value>,
    transition: Map<Value, Maybe<NextValue>>
  ): Maybe<NextValue>
}

/**
 * Binds the value of the `monad` to new monad created
 * by the `transition` function.
 */
export const bind = permutationOf2(
  <Value, NextValue>(
    monad: Maybe<Value>,
    transition: Map<Value, Maybe<NextValue>>
  ): Maybe<NextValue> => {
    return isJust(monad)
      ? compose(transition, fold)(monad)
      : monad
  }
) as Bind

export default bind
