export type Last<T extends any[]> =
  T extends [...any[], infer L]
    ? L
    : any

export const last =
  <T extends any[]>(list: T): Last<T> => list[list.length - 1]
