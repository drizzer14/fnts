export type Last<T extends any[]> = T[T extends [...infer H, any]
  ? H extends { length: infer L }
    ? L
    : number
  : never]
