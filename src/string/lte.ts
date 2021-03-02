import { lt } from './lt';

export const lte = (b: string) => (a: string): boolean => a === b || lt(b)(a);
