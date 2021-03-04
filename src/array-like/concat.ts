export function concat (...b: string[]): (a: string) => string;

export function concat <T>(...b: Array<T | ConcatArray<T>>): (a: T[]) => T[];

/**
 * Funtional implementation of `Array.prototype.concat` and `String.prototype.concat`.
 */
export function concat <T>(...b: string[] & Array<T | ConcatArray<T>>): (a: string & T[]) => string | T[] {
  return (a) => a.concat(...b);
}
