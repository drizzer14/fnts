import { add } from './add';

/**
 * Increments a number by 1.
 */
export function incr (x: number): number {
  return add (x) (1);
}
