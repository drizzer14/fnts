export type Head<T extends any[] | readonly any[]> = T[0]

export const head =
  <T extends any[] | readonly any[]> (list: T): Head<T> => list[0]
