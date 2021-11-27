/**
 * @module Maybe
 */
/**
 * Internal unique identifier for `Just`.
 */
export const jid = Symbol.for('@@functional/just')

/**
 * Type constructor for `Just`.
 * Describes the special object with one property, represented as unique symbol
 * key, holding the provided value type.
 */
export type Just<Value> = {
  [jid]: Exclude<Value, null | undefined>
}

/**
 * Constructor function for `Just`.
 * Creates the special object with one property, represented as unique symbol
 * key, holding the provided value.
 */
export default function just<Value> (value: Value): Just<Value> {
  return {
    [jid]: value as Exclude<Value, null | undefined>
  }
}
