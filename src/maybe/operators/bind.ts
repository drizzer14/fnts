import compose from '../../compose'
import type { Maybe } from '../maybe'

import { fold } from './fold'
import { isJust } from './guards'

export const bind = <Value, NextValue>(
  monad: Maybe<Value>,
  transition: (value: Value) => Maybe<NextValue>
): Maybe<NextValue> => {
  return isJust(monad)
    ? compose(transition, fold)(monad)
    : monad
}
