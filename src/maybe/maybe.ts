/**
 * @internal
 */
export const jid = Symbol.for('@@functional/just')

export type Just<Value> = {
  [jid]: Exclude<Value, null | undefined>
}

export const just = <Value>(value: Value): Just<Value> => ({
  [jid]: value as Exclude<Value, null | undefined>
})

/**
 * @internal
 */
export const nid = Symbol.for('@@functional/nothing')

export type Nothing = {
  [nid]: null
}

export const nothing = (): Nothing => ({
  [nid]: null
})

export type Maybe<Value> = Just<Value> | Nothing

export const maybe = <Value>(value: Value | null | undefined): Maybe<Value> => {
  return value === null || value === undefined
    ? nothing()
    : just(value)
}

export default maybe
