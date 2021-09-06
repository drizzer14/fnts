/**
 * A type describing the `identity` function.
 */
export type Identity<T> = (x: T) => T

/**
 * A function which returns the provided value.
 */
export const identity = <T> (x: T): T => x

export default identity
