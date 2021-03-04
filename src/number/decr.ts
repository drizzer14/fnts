import { sub } from './sub';

/**
 * Decrements a number by 1.
 */
export function decr (x: number): number {
  return sub (x) (1);
}
