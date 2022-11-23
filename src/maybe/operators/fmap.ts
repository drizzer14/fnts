/**
 * @module Maybe Operators
 */

import compose from '../../compose'
import identity from '../../identity'
import maybe, { Maybe } from '../maybe'
import type { Map } from '../../types/map'
import permutation2 from '../../permutation/permutation-2'

import foldMap from './fold-map'
import { isJust } from './guards'

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export default function fmap<Value, NextValue>(
  map: Map<Value, NextValue>
): (monad: Maybe<Value>) => Maybe<NextValue>

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns a new `Maybe` of the mapped value.
 */
export default function fmap<Value, NextValue>(
  monad: Maybe<Value>,
  map: Map<Value, NextValue>
): Maybe<NextValue>

export default function fmap (...args: [any, any?]): any {
  return permutation2(
    <Value, NextValue>(
      monad: Maybe<Value>,
      map: Map<Value, NextValue>
    ): Maybe<NextValue> => {
      return isJust(monad)
        ? compose((maybe<NextValue>), foldMap(map), monad)
        : identity(monad)
    }
  )(...args)
}
