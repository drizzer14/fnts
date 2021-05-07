export type Reverse<T extends readonly any[]> = T extends [...infer F, infer R]
  ? F['length'] extends 0
    ? T
    : [R, ...Reverse<F>]
  : T
