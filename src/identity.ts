/**
 * A type describing the `identity` function.
 */
export type Identity<T> = (x: T) => T

/**
 * A function which returns the provided value.
 */
export function identity<T> (x: T): T {
  return x
}

export default identity
