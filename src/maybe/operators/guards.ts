/**
 * @module Maybe Operators
 */

import { Just, jid } from '../just'
import type { Maybe } from '../maybe'
import { Nothing, nid } from '../nothing'

/**
 * Type guard function to tell if the provided `value` is `Just`.
 */
export function isJust <Value>(value: any): value is Just<Value> {
  return Object.prototype.hasOwnProperty.call(value, jid)
}

/**
 * Type guard function to tell if the provided `value` is `Nothing`.
 */
export function isNothing (value: any): value is Nothing {
  return Object.prototype.hasOwnProperty.call(value, nid)
}

/**
 * Type guard function to tell if the provided `value` is `Maybe`.
 */
export function isMaybe <Value>(value: any): value is Maybe<Value> {
  return isJust(value) || isNothing(value)
}
