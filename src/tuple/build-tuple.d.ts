/**
 * {@link https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f Gracefully borrowed from}
 */
export type BuildTuple<L extends number, T extends any[] = []> =
  T extends { length: L } ? T : BuildTuple<L, [...T, any]>
