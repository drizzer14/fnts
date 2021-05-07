export type Head<T extends any[]> = T[0]

export const head = <T extends any[]> (list: T): Head<T> => list[0]
