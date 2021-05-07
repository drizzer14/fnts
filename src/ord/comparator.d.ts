import type { Ord } from './ord'

export interface Comparator {
  (b: number): (a: number) => boolean

  (b: string): (a: string) => boolean

  (b: Ord): (a: Ord) => boolean

  (a: number, b: number): boolean

  (a: string, b: string): boolean

  (a: Ord, b: Ord): boolean
}
