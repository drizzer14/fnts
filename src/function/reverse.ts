import { flip } from '../array-like/flip'
import type { Reverse } from '../tuple/reverse'

export const reverse =
  <F extends (...args: any[]) => any> (
    fn: F,
  ) => (...args: Reverse<Parameters<F>>): ReturnType<F> => {
    return fn(...flip<Parameters<F>>(args))
  }
