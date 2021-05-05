import type { Last } from '../tuple/last'

import { at } from './at'

export interface LastFn {
  (string: string): string

  <T extends any[]> (array: T): Last<T>
}

export const last = at(-1) as LastFn
