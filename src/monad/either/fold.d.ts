import type { Either } from './either'

export type FoldLeft<E extends Either<any, any>> = E extends Either<infer L, any> ? L : never

export type FoldRight<E extends Either<any, any>> = E extends Either<any, infer R> ? R : never
