import { clamp } from './clamp';

/**
 * For a positive number below `max` returns that number.
 * For a negative number returns 0.
 * For a positive number above `max` offsets `max` by the absolute value of a number to the left.
 */
export function offset (x: number): (max: number) => number {
  return (max) => clamp (0, max) ((x < 0) ? (max + x) : x);
}
