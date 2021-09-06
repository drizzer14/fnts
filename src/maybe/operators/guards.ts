import { Maybe, Just, jid, Nothing, nid } from '../maybe'

/**
 * Type guard function to tell if the provided `monad` is `Just`.
 */
export const isJust = <Value>(monad: Maybe<Value>): monad is Just<Value> => {
  return Object.prototype.hasOwnProperty.call(monad, jid)
}

/**
 * Type guard function to tell if the provided `monad` is `Nothing`.
 */
export const isNothing = <Value>(monad: Maybe<Value>): monad is Nothing => {
  return Object.prototype.hasOwnProperty.call(monad, nid)
}
