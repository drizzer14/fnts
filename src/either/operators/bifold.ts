import { Either, Left, lid, Right, rid } from '../either'

import { isLeft, isRight } from './guards'

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
export const bifoldl = <Monad extends Either<any, any>>(
  monad: Monad
): Bifoldl<Monad> => {
  return isLeft(monad)
    ? monad[lid]
    : undefined
}

/**
 * A type to unwrap the right value type of the provided `Monad`.
 * If the `Monad` is `Left`, returns `undefined`.
 */
export type Bifoldr<Monad extends Either<any, any>> =
  Monad extends Right<infer RightValue>
    ? RightValue
    : undefined

/**
 * Returns the right value of the provided `monad`.
 * If the `monad` is `Left`, returns `undefined`.
 */
export const bifoldr = <Monad extends Either<any, any>>(
  monad: Monad
): Bifoldr<Monad> => {
  return isRight(monad)
    ? monad[rid]
    : undefined
}

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
export const bifold = <Monad extends Either<any, any>>(
  monad: Monad
): Bifold<Monad> => {
  return bifoldl(monad) ?? bifoldr(monad as Right<any>)
}

export default bifold
