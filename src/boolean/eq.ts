/**
 * Functional implementation of the `===` operator for primitives.
 * Objects are compared by their string value.
 */
export function eq<T>(a: T): (b: T) => boolean {
  return (b) => {
    if (a === b) {
      return true;
    }

    if (
      (Array.isArray (a) && Array.isArray (b)) ||
      (typeof a === 'object' && typeof b === 'object')
    ) {
      try {
        return JSON.stringify (a) === JSON.stringify (b);
      } catch {
        return false;
      }
    }

    return false;
  }
}
