/**
 * {@link https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f Gracefully borrowed from here}
 */
export type Tuple<L extends number, T extends any[] = []> =
  T extends { length: L } ? T : Tuple<L, [...T, any]>
