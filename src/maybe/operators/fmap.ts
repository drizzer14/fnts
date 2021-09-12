import compose from '../../compose'
import { maybe, Maybe } from '../maybe'
import type { Map } from '../../.internal/map'
import permutationOf2 from '../../.internal/permutation-of-2'

import { fold } from './fold'
import { isJust } from './guards'

interface Fmap {
  <Value, NextValue>(
    transition: Map<Value, NextValue>
  ): (monad: Maybe<Value>) => Maybe<NextValue>

  <Value, NextValue>(
    monad: Maybe<Value>,
    transition: Map<Value, NextValue>
  ): Maybe<NextValue>
}

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export const fmap = permutationOf2(
  <Value, NextValue>(
    monad: Maybe<Value>,
    transition: Map<Value, NextValue>
  ): Maybe<NextValue> => {
    return isJust(monad)
      ? compose(maybe, transition, fold)(monad) as Maybe<NextValue>
      : monad
  }
) as Fmap

export default fmap
