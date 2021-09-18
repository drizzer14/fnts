import compose from '../../compose'
import type { Just } from '../just'
import type { Maybe } from '../maybe'
import type { Nothing } from '../nothing'
import type { Map } from '../../.internal/map'
import permutationOf2 from '../../.internal/permutation-of-2'

import fold from './fold'
import { isJust } from './guards'

/**
 * A type to unwrap the provided `Monad` into the new value type.
 */
export type FoldMap<Monad extends Maybe<any>, NextValue> =
  Monad extends Just<any>
    ? NextValue
    : Monad extends Nothing
      ? null
      : never

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export function foldMap<Value, NextValue> (
  transition: Map<Value, NextValue>
): (monad: Just<Value>) => NextValue

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export function foldMap<Value, NextValue> (
  transition: Map<Value, NextValue>
): (monad: Nothing) => null

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export function foldMap<Value, NextValue> (
  transition: Map<Value, NextValue>
): (monad: Maybe<Value>) => NextValue | null

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export function foldMap<Value, NextValue> (
  monad: Just<Value>,
  transition: Map<Value, NextValue>
): NextValue

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export function foldMap<Value, NextValue> (
  monad: Nothing,
  transition: Map<Value, NextValue>
): null

/**
 * Maps the value of the provided `monad` through the `transition` function
 * and returns the mapped value or `null`.
 */
export function foldMap<Value, NextValue> (
  monad: Maybe<Value>,
  transition: Map<Value, NextValue>
): NextValue | null

export function foldMap (...args: [any, any?]) {
  return permutationOf2(
    <Value, NextValue> (
      monad: Maybe<Value>,
      transition: Map<Value, NextValue>
    ): NextValue | null => {
      return isJust(monad)
        ? compose(transition, fold)(monad)
        : null
    }
  )(...args)
}

export default foldMap
