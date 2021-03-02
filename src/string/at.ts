import { offset } from '../number';

export const at = (position: number) => (string: string): string => string[offset(string.length)(position)];
