import compose from '../../compose'
import type { Just, Maybe, Nothing } from '../maybe'
import type { Map } from '../../.internal/map'
import permutationOf2 from '../../.internal/permutation-of-2'

import { fold } from './fold'
import { isJust } from './guards'

/**
 * @internal
 */
interface FoldMap {
  <Value, NextValue>(
    transition: Map<Value, NextValue>
  ): (monad: Just<Value>) => NextValue

  <Value, NextValue>(
    transition: Map<Value, NextValue>
  ): (monad: Nothing) => null

  <Value, NextValue>(
    transition: Map<Value, NextValue>
  ): (monad: Maybe<Value>) => NextValue | null

  <Value, NextValue>(
    monad: Just<Value>,
    transition: Map<Value, NextValue>
  ): NextValue

  <Value, NextValue>(
    monad: Nothing,
    transition: Map<Value, NextValue>
  ): null

  <Value, NextValue>(
    monad: Maybe<Value>,
    transition: Map<Value, NextValue>
  ): NextValue | null
}

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export const foldMap = permutationOf2(
  <Value, NextValue>(
    monad: Maybe<Value>,
    transition: Map<Value, NextValue>
  ): NextValue | null => {
    return isJust(monad)
      ? compose(transition, fold)(monad)
      : null
  }
) as FoldMap

export default foldMap
