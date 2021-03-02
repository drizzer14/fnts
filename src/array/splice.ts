import { slice } from './slice';

export const splice = (start: number, count = 1) => slice(start, start + count);
