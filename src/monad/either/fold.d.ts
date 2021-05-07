import type { Either } from './either'

export type FoldLeft<Return extends Either<any, any>> =
  Return extends Either<infer Left, any>
    ? Left
    : never

export type FoldRight<Return extends Either<any, any>> =
  Return extends Either<any, infer Right>
    ? Right
    : never
