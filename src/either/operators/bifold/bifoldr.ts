/**
 * @module Either Operators
 */

import { isRight } from '../guards'
import { Right, rid } from '../../right'
import type { Either } from '../../either'

/**
 * A type to unwrap the right value type of the provided `Monad`.
 * If the `Monad` is `Left`, returns `undefined`.
 */
export type Bifoldr<Monad extends Either<any, any>> =
  Monad extends Right<infer RightValue>
    ? RightValue
    : Monad extends Either<any, infer RightValue>
      ? RightValue | undefined
      : never

/**
 * Returns the right value of the provided `monad`.
 * If the `monad` is `Left`, returns `undefined`.
 */
export default function bifoldr<Monad extends Right<any>> (
  monad: Monad
): Bifoldr<Monad>

/**
 * Returns the right value of the provided `monad`.
 * If the `monad` is `Left`, returns `undefined`.
 */
export default function bifoldr<RightValue> (
  monad: Either<any, RightValue>
): RightValue | undefined

/**
 * Returns the right value of the provided `monad`.
 * If the `monad` is `Left`, returns `undefined`.
 */
export default function bifoldr<RightValue> (
  monad: Either<any, RightValue>
): RightValue | undefined {
  return isRight(monad)
    ? monad[rid]
    : undefined
}
