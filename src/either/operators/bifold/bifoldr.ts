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
    : undefined

/**
 * Returns the right value of the provided `monad`.
 * If the `monad` is `Left`, returns `undefined`.
 */
export function bifoldr<Monad extends Either<any, any>> (
  monad: Monad
): Bifoldr<Monad> {
  return isRight(monad)
    ? monad[rid]
    : undefined
}

export default bifoldr
