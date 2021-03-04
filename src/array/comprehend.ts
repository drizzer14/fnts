import { identity } from '../identity';
import { compose } from '../function/compose';

import { map } from './map';
import { filter } from './filter';
import type { Predicate, Transformer } from './array-callback';

/**
 * Optionally filters and maps an array to new array.
 */
export function comprehend <T, R>(transformer: Transformer<T, R>, predicate?: Predicate<T>): (array: T[]) => R[] {
  return compose (
    map (transformer),
    predicate ? filter (predicate) : identity
  );
}
