import { Either, Left, lid, Right, rid } from '../either'

import { isLeft, isRight } from './guards'

export type Bifoldl<Monad extends Either<any, any>> =
  Monad extends Left<infer LeftValue>
    ? LeftValue
    : undefined

export const bifoldl = <Monad extends Either<any, any>>(
  monad: Monad
): Bifoldl<Monad> => {
  return isLeft(monad)
    ? monad[lid]
    : undefined
}

export type Bifoldr<Monad extends Either<any, any>> =
  Monad extends Right<infer RightValue>
    ? RightValue
    : undefined

export const bifoldr = <Monad extends Either<any, any>>(
  monad: Monad
): Bifoldr<Monad> => {
  return isRight(monad)
    ? monad[rid]
    : undefined
}

export type Bifold<Monad extends Either<any, any>> =
  Monad extends Left<infer LeftValue>
    ? LeftValue
    : Monad extends Right<infer RightValue>
      ? RightValue
      : never

export const bifold = <Monad extends Either<any, any>>(
  monad: Monad
): Bifold<Monad> => {
  return isLeft(monad)
    ? bifoldl(monad)
    : bifoldr(monad as Right<any>)
}
