import { foldr } from '../array/foldr';
import type { Last } from '../array-like/last';

/**
 * Composes several functions together.
 * `f (g (x)) === compose (f, g) (x)`
 */
export function compose <FS extends Array<(arg: any) => any>>(...fs: FS): (arg: Parameters<Last<FS>>[0]) => ReturnType<FS[0]> {
  return (arg) => foldr <FS[number], typeof arg>((current, accumulator) => current (accumulator), arg) (fs);
}
