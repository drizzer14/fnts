import { last } from '../array-like/last';
import { slice } from '../array-like/slice';

export type Guard<F extends (...args: any[]) => any> = [
  <G extends boolean>(...args: Parameters<F>) => G,
  F
];

/**
 * Splits a function into smaller functions which get called if their respective predicate is satisfied.
 */
export const guard = <F extends (...args: any[]) => any>(...guards: [...Guard<F>[], F]) => (...args: Parameters<F>): ReturnType<F> => {
  const defaultGuard = [() => true, last (guards)] as Guard<F>;

  return ([...slice (0, -1) (guards), defaultGuard] as Guard<F>[]).reduce ((accumulator, current, index, array) => {
    if (current[0] (...args)) {
      array.splice (index, 1);

      return current;
    }

    return accumulator;
  })[1](...args);
};
