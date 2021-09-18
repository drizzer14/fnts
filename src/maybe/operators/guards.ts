import { Just, jid } from '../just'
import type { Maybe } from '../maybe'
import { Nothing, nid } from '../nothing'

/**
 * Type guard function to tell if the provided `monad` is `Just`.
 */
export function isJust <Value>(monad: Maybe<Value>): monad is Just<Value> {
  return Object.prototype.hasOwnProperty.call(monad, jid)
}

/**
 * Type guard function to tell if the provided `monad` is `Nothing`.
 */
export function isNothing <Value>(monad: Maybe<Value>): monad is Nothing {
  return Object.prototype.hasOwnProperty.call(monad, nid)
}
