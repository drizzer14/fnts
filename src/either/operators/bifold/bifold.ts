/**
 * @module Either Operators
 */

import { isLeft } from '../guards';
import { lid, Left } from '../../left';
import { rid, Right } from '../../right'
import type { Either } from '../../either'

import type { Bifoldl } from './bifoldl';
import type { Bifoldr } from './bifoldr';

/**
 * A type to unwrap either the left or the right value type
 * of the provided `Monad`.
 */
export type Bifold<Monad extends Either<any, any>> =
  Monad extends Left<infer LeftValue>
    ? LeftValue
    : Monad extends Right<infer RightValue>
      ? RightValue
      : Monad extends Either<infer LeftValue, infer RightValue>
        ? LeftValue | RightValue
        : never

/**
 * Unwraps either the left or the right value of the provided `monad`.
 */
export default function bifold<LeftValue, RightValue> (
  monad: Either<LeftValue, RightValue>
): LeftValue | RightValue

/**
 * Unwraps either the left or the right value of the provided `monad`.
 */
export default function bifold<Monad extends Either<any, any>> (
  monad: Monad
): Bifold<Monad>

/**
 * Unwraps either the left or the right value of the provided `monad`.
 */
export default function bifold<LeftValue, RightValue> (
  monad: Either<LeftValue, RightValue>
): LeftValue | RightValue {
  return isLeft(monad)
    ? monad[lid]
    : monad[rid]
}
