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
    : Monad extends Either<infer LeftValue, any>
      ? LeftValue | undefined
      : never

/**
 * Returns the left value of the provided `monad`.
 * If the `monad` is `Right`, returns `undefined`.
 */
export default function bifoldl<Monad extends Left<any>> (
  monad: Monad
): Bifoldl<Monad>

/**
 * Returns the left value of the provided `monad`.
 * If the `monad` is `Right`, returns `undefined`.
 */
export default function bifoldl<LeftValue> (
  monad: Either<LeftValue, any>
): LeftValue | undefined

/**
 * Returns the left value of the provided `monad`.
 * If the `monad` is `Right`, returns `undefined`.
 */
export default function bifoldl<LeftValue> (
  monad: Either<LeftValue, any>
): LeftValue | undefined {
  return isLeft(monad)
    ? monad[lid]
    : undefined
}
