/**
 * Internal unique identifier for `Nothing`.
 */
export const nid = Symbol.for('@@functional/nothing')

/**
 * Type constructor for `Nothing`.
 * Describes the special object with one property, represented as unique symbol
 * key, holding the `null` value type.
 */
export type Nothing = {
  [nid]: null
}

/**
 * Constructor function for `Nothing`.
 * Creates the special object with one property, represented as unique symbol
 * key, holding the `null` value.
 */
export default function nothing (): Nothing {
  return {
    [nid]: null
  }
}
