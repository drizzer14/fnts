export type Head<T extends any[]> = T[0]

export const head = <T extends any[]> (array: T): Head<T> => array[0]
