export interface Tail {
  // https://github.com/ksxnodemodules/typescript-tuple/blob/master/lib/utils.ts
  <T extends ReadonlyArray<any>>(tuple: T): ((...args: T) => any) extends ((_: any, ..._1: infer Rest) => any)
    ? Rest
    : T;
  <T>(array: T[]): T[];
}

export const tail: Tail = <T>([, ...t]: T[]): T[] => t;
