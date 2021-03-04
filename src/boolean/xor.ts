import { or } from './or';
import { and } from './and';

/**
 * Functional implementation of the `XOR` operation.
 */
export function xor<A, B>(a: A): (b: B) => boolean {
  return (b) => !and (a) (b) && or (a) (b);
}
