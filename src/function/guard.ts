import { snd } from '../pair';
import { eitherS } from '../type/either';
import { last, slice, takeWhile } from '../array';

import { compose } from './compose';

export type Guard<F extends (...args: any[]) => any> = [
  <G extends boolean>(...args: Parameters<F>) => G,
  F
];

export const guard = <F extends (...args: any[]) => any>(...guards: [...Guard<F>[], F]) => (...args: Parameters<F>): ReturnType<F> => {
  return eitherS(
    () => (last(guards) as F)(...args),
    () => {
      return snd(
        compose(
          last,
          takeWhile<Guard<F>>(([current]) => current(...args))
        )([
          ...slice(0, -1)(guards),
          [() => true, last(guards)]
        ] as Guard<F>[])
      )(...args)
    }
  ).fold();
};
