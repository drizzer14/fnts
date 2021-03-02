import { or } from './or';
import { and } from './and';

export const xor = (b: unknown) => (a: unknown) => !and(b)(a) && or(b)(a);
