export function show <T extends number>(x: T): `${T}`;

/**
 * Shows a string value of a given number.
 */
export function show (x: number): string {
  return `${x}`;
}
