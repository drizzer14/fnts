import { foldl } from '../array/foldl';
import type { Last } from '../array-like/last';

/**
 * Pipes several functions together.
 * `g (f (x)) === pipe (f, g) (x)`
 */
export function pipe <FS extends Array<(arg: any) => any>>(...fs: FS): (arg: Parameters<FS[0]>[0]) => ReturnType<Last<FS>> {
  return (arg) => foldl <FS[number], typeof arg>((accumulator, current) => current (accumulator), arg) (fs);
}
