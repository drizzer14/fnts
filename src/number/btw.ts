/**
 * Functional `and` combinator for a number.
 */
export function btw (a: (x: number) => boolean, b: (x: number) => boolean): (x: number) => boolean {
  return (x) => a (x) && b (x);
}
