export type Identity<T> = (x: T) => T;

/**
 * Returns the same value provided as the argument.
 */
export function identity<T>(x: T): T {
  return x;
}
