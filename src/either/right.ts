/**
 * @module Either
 */

/**
 * Internal unique identifier for `Right`.
 */
export const rid = Symbol.for('@@functional/right')

/**
 * Type constructor for `Right`.
 * Describes the special object with one property, represented as unique symbol
 * key, holding the provided value type.
 */
export type Right<Value> = {
  [rid]: Value
}

/**
 * Constructor function for `Right`.
 * Creates the special object with one property, represented as unique symbol
 * key, holding the provided value.
 */
export default function right<Value = undefined> (value?: Value): Right<Value> {
  return {
    [rid]: value as Value,
    // @ts-expect-error: Undocumented API for external use
    toString() {
      return `Right ${value}`
    }
  }
}
