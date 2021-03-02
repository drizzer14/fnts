export type ArrayCallback<T, R> = (element: T, index: number, array: T[]) => R;

export type Predicate<T> = ArrayCallback<T, boolean>;

export type Transformer<T, R> = ArrayCallback<T, R>;

export type LeftReducer<T, R = T> = (accumulator: R, current: T, index: number, array: T[]) => R;

export type RightReducer<T, R = T> = (current: T, accumulator: R, index: number, array: T[]) => R;
