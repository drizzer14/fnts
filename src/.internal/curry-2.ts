/**
 * @internal
 */
type BinaryFunction = (f: any, s: any) => any

/**
 * @internal
 */
export type FirstParameter<F extends (...args: any[]) => any> = Parameters<F>[0]

/**
 * @internal
 */
export type SecondParameter<F extends (...args: any[]) => any> = Parameters<F>[1]

/**
 * @internal
 */
export type Curry2<F extends BinaryFunction> =
  SecondParameter<F> extends undefined
    ? (s: SecondParameter<F>) => (f: FirstParameter<F>) => ReturnType<F>
    : (f: FirstParameter<F>, s: SecondParameter<F>) => ReturnType<F>

/**
 * @internal
 */
export const curry2 =
  <F extends BinaryFunction> (fn: F) =>
    (
      f1: FirstParameter<F> | SecondParameter<F>,
      s: SecondParameter<F> | undefined,
    ): Curry2<F> => {
      return s === undefined
        ? (f2: FirstParameter<F>) => fn(f2, f1)
        : fn(f1, s)
    }
