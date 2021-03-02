import { gt } from './gt';

export const gte = (b: string) => (a: string): boolean => a === b || gt(b)(a);
