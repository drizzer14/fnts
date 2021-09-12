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
export const left = <Value>(value: Value): Left<Value> => ({
  [lid]: value
})

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
export const right = <Value>(value: Value): Right<Value> => ({
  [rid]: value
})

/**
 * Type constructor for `Either`.
 * This can be either `Right` of the resolved promise provided,
 * or `Left` of the rejected one.
 */
export type Either<LeftValue, RightValue> = Left<LeftValue> | Right<RightValue>

/**
 * Type constructor for `Either`.
 * This creates either `Right` of the resolved promise provided,
 * or `Left` of the rejected one.
 */
export const either = async <LeftValue, RightValue>(
  value: () => Promise<RightValue>
): Promise<Either<LeftValue, RightValue>> => {
  return value().then(right).catch(left)
}

export default either
