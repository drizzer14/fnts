/**
 * Cuts a number between specified `min` and `max` values.
 */
export function clamp (min: number, max: number): (x: number) => number {
  return (x) => Math.max (Math.min (x, max), min);
}
