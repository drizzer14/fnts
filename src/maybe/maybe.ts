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
export const just = <Value>(value: Value): Just<Value> => ({
  [jid]: value as Exclude<Value, null | undefined>
})

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
export const nothing = (): Nothing => ({
  [nid]: null
})

/**
 * Type constructor for `Maybe`.
 * This can be either `Just` of a provided value type, or `Nothing`.
 */
export type Maybe<Value> = Just<Value> | Nothing

/**
 * Constructor function for `Maybe`.
 * This creates either `just` of a provided value, or `nothing`.
 */
export const maybe = <Value>(value: Value | null | undefined): Maybe<Value> => {
  return value === null || value === undefined
    ? nothing()
    : just(value)
}

export default maybe
