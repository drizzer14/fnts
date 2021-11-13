import type { Left } from '../../left'
import type { Right } from '../../right'
import type { Either } from '../../either'

import bifoldl from './bifoldl'
import bifoldr from './bifoldr'

/**
 * A type to unwrap either the left or the right value type
 * of the provided `Monad`.
 */
export type Bifold<Monad extends Either<any, any>> =
  Monad extends Left<infer LeftValue>
    ? LeftValue
    : Monad extends Right<infer RightValue>
      ? RightValue
      : never

/**
 * Unwraps either the left or the right value of the provided `monad`.
 */
export default function bifold<Monad extends Either<any, any>> (
  monad: Monad
): Bifold<Monad> {
  return bifoldl(monad) ?? bifoldr(monad as Right<any>)
}
