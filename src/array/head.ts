export interface Head {
  <T extends ReadonlyArray<any>>(tuple: T): T[0];
  <T>(array: T[]): T;
}

export const head: Head = <T>([h]: T[]): T => h;
