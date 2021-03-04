import { some } from './some';

/**
 * Tells if at least one element of the array is truthy.
 */
export function or <T>(array: T[]): boolean {
  return some (Boolean) (array);
}
