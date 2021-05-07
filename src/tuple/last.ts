export type Last<T extends any[]> =
  T extends [...any[], infer L]
    ? L
    : any

export const last =
  <T extends any[]>(array: T): Last<T> => array[array.length - 1]
