import { and } from '../boolean'
import { ofType } from '../type'
import { slice } from '../array-like/slice'
import { curry2Or3 } from '../.internal/curry-2-or-3'

import { or } from './or'
import { map } from './map'

export interface SpliceFn {
  (start: number, count?: number): <T>(array: T[]) => T[]

  <T> (array: T[], start: number, count?: number): T[]
}

export const splice = curry2Or3(
  <T> (
    array: T[],
    start: number,
    count = 1,
  ) => slice(array, start, start + count),
)(
  (f, s, t) => or(
    map(
      map(
        [f, s],
        ofType('number'),
      ),
      and(t !== undefined),
    ),
  ),
) as SpliceFn
