/**
 * @module Maybe Operators
 */

import compose from '../../compose'
import type { Just } from '../just'
import type { Maybe } from '../maybe'
import type { Nothing } from '../nothing'
import type { Map } from '../../types/map'
import permutation2 from '../../permutation/permutation-2'

import { isJust } from './guards'
import fold, { Fold } from './fold';

/**
 * A type to unwrap the provided `Monad` into the new value type.
 */
export type FoldMap<Monad extends Maybe<any>, NextValue> =
  Monad extends Just<any>
    ? NextValue
    : Monad extends Nothing
      ? undefined
      : Monad extends Maybe<any>
        ? NextValue | undefined
        : never

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export default function foldMap<Value, NextValue> (
  map: Map<Value, NextValue>
): (monad: Maybe<Value>) => NextValue | undefined

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export default function foldMap<Value, NextValue> (
  monad: Maybe<Value>,
  map: Map<Value, NextValue>
): NextValue | undefined

export default function foldMap (...args: [any, any?]): any {
  return permutation2(
    <Value, NextValue> (
      monad: Maybe<Value>,
      map: Map<Value, NextValue>
    ): NextValue | undefined => {
      return isJust(monad)
        ? compose(map, fold, monad)
        : undefined
    }
  )(...args)
}
