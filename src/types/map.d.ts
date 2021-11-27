/**
 * @module Types
 */

/**
 * A type of a function which maps the original value type to another one.
 */
export type Map<From, To> = (value: From) => To
