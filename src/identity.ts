export type Identity<T> = (x: T) => T

export const identity = <T> (x: T): T => x

export default identity
