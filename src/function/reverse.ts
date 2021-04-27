import type { Reverse } from '../tuple'
import { flip } from '../array-like/flip'

export const reverse =
  <F extends (...args: any[]) => any> (
    fn: F,
  ) => (...args: Reverse<Parameters<F>>): ReturnType<F> => {
    return fn(...flip<Parameters<F>>(args))
  }
