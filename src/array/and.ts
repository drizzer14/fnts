import { every } from './every';

/**
 * Tells if every array element is truthy.
 */
export function and <T>(array: T[]): boolean {
  return every <T>(Boolean) (array);
}
