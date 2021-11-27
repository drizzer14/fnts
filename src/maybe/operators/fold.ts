/**
 * @module Maybe Operators
 */

import { jid, Just } from '../just'
import type { Maybe } from '../maybe'
import { nid, Nothing } from '../nothing'

import { isJust } from './guards'

/**
 * A type to unwrap the value type of the provided `Monad`.
 */
export type Fold<Monad extends Maybe<any>> =
  Monad extends Just<infer Value>
    ? Value
    : Monad extends Nothing
      ? null
      : never

/**
 * Returns the value of the provided `monad`.
 */
export default function fold<Monad extends Maybe<any>> (
  monad: Monad
): Fold<Monad> {
  return isJust(monad)
    ? monad[jid]
    : (monad as Nothing)[nid]
}
