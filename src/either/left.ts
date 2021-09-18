/**
 * Internal unique identifier for `Left`.
 */
export const lid = Symbol.for('@@functional/left')

/**
 * Type constructor for `Left`.
 * Describes the special object with one property, represented as unique symbol
 * key, holding the provided value type.
 */
export type Left<Value> = {
  [lid]: Value
}

/**
 * Constructor function for `Left`.
 * Creates the special object with one property, represented as unique symbol
 * key, holding the provided value.
 */
export function left<Value> (value: Value): Left<Value> {
  return {
    [lid]: value
  }
}

export default left
