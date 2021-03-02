import { slice } from './slice';

export const taker = (amount: number) => <T>(array: T[]): T[] => slice(-amount, array.length)(array);
