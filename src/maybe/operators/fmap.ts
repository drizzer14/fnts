import compose from '../../compose'
import type { Map } from '../../.internal/map'
import { maybe, Maybe, nothing } from '../maybe'

import { fold } from './fold'
import { isJust } from './guards'

export const fmap = <Value, NextValue>(
  monad: Maybe<Value>,
  transition: Map<Value, NextValue>
): Maybe<NextValue> => {
  return isJust(monad)
    ? compose(maybe, transition, fold)(monad) as Maybe<NextValue>
    : nothing()
}
