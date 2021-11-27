/**
 * @module Either Operators
 */

import { isLeft } from '../guards'
import { Left, lid } from '../../left'
import type { Either } from '../../either'

/**
 * A type to unwrap the left value type of the provided `Monad`.
 * If the `Monad` is `Right`, returns `undefined`.
 */
export type Bifoldl<Monad extends Either<any, any>> =
  Monad extends Left<infer LeftValue>
    ? LeftValue
    : undefined

/**
 * Returns the left value of the provided `monad`.
 * If the `monad` is `Right`, returns `undefined`.
 */
export default function bifoldl<Monad extends Either<any, any>> (
  monad: Monad
): Bifoldl<Monad> {
  return isLeft(monad)
    ? monad[lid]
    : undefined
}
