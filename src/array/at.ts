import { offset } from '../number';

export const at = (index: number) => <T>(array: T[]): T => array[offset(array.length)(index)];
