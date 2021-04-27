import { FirstParameter, SecondParameter } from './curry-2'

/**
 * @internal
 */
type TernaryFunction = (f: any, s: any, t: any) => any

/**
 * @internal
 */
export type ThirdParameter<F extends (...args: any[]) => any> = Parameters<F>[2]

/**
 * @internal
 */
export type Curry3<F extends TernaryFunction> =
  ThirdParameter<F> extends undefined
    ? (
    s: SecondParameter<F>,
    t: ThirdParameter<F>,
    ) => (f: FirstParameter<F>) => ReturnType<F>
    : (
    f: FirstParameter<F>,
    s: SecondParameter<F>,
    t: ThirdParameter<F>,
    ) => ReturnType<F>

/**
 * @internal
 */
export const curry3 =
  <F extends TernaryFunction> (fn: F) =>
    (
      f1: FirstParameter<F> | SecondParameter<F>,
      s: SecondParameter<F> | ThirdParameter<F>,
      t: ThirdParameter<F> | undefined,
    ): Curry3<F> => {
      return t === undefined
        ? (f2: FirstParameter<F>) => fn(f2, f1, s)
        : fn(f1, s, t)
    }
