/**
 * @module Maybe Operators
 */

import compose from '../../compose'
import ternary from '../../ternary'
import type { Just } from '../just'
import type { Maybe } from '../maybe'
import type { Nothing } from '../nothing'
import type { Map } from '../../types/map'
import permutation2 from '../../permutation/permutation-2'

import fold from './fold'
import { isJust } from './guards'

/**
 * A type to unwrap the provided `Monad` into the new value type.
 */
export type FoldMap<Monad extends Maybe<any>, NextValue> =
  Monad extends Just<any>
    ? NonNullable<NextValue>
    : Monad extends Nothing
      ? null
      : never

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export default function foldMap<Value, NextValue = Value> (
  transition: Map<Value, NextValue>
): (monad: Maybe<Value>) => FoldMap<Maybe<Value>, NextValue>

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export default function foldMap<Value, NextValue = Value> (
  monad: Maybe<Value>,
  transition: Map<Value, NextValue>
): FoldMap<Maybe<Value>, NextValue>

export default function foldMap (...args: [any, any?]): any {
  return permutation2(
    <Value, NextValue> (
      monad: Maybe<Value>,
      transition: Map<Value, NextValue>
    ): FoldMap<Maybe<Value>, NextValue> => {
      return ternary(
        isJust,
        compose(transition, fold),
        () => null
      )(monad) as FoldMap<Maybe<Value>, NextValue>
    }
  )(...args)
}
