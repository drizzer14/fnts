import type { Curry } from '../function/curry'

export type ArrayCallback<T, R = T> = Curry<
  (
    element: T,
    index: number,
    array: T[],
  ) => R
>

export type Predicate<T> = ArrayCallback<T, boolean>

export type Transformer<T, R = T> = ArrayCallback<T, R>

export type LeftReducer<T, R = T> = Curry<
  (
    accumulator: R,
    current: T,
    index: number,
    array: T[],
  ) => R
>

export type RightReducer<T, R = T> = Curry<
  (
    current: T,
    accumulator: R,
    index: number,
    array: T[],
  ) => R
>

export type Comparator<T> = Curry<(a: T, b: T) => number>
