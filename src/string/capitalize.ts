import { head } from '../array-like/head';
import { tail } from '../array-like/tail';
import { compose } from '../function/compose';

import { toUpperCase } from './to-upper-case';

/**
 * Capitalizes the given string.
 */
export function capitalize (string: string): string {
  return `${compose (toUpperCase, head) (string)}${tail (string)}`;
}
