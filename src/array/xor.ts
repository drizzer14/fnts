/**
 * Tells if array elements have both truthy and falsy values.
 */
export function xor <T>(array: T[]): boolean {
  let hasTrue = false;
  let hasFalse = false;

  for (let index = 0; index < array.length; index += 1) {
    const current = Boolean(array[index]);

    if (current && !hasTrue) {
      hasTrue = true;
    }

    if (!current && !hasFalse) {
      hasFalse = true;
    }
  }

  return hasTrue && hasFalse;
}
