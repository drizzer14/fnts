import { div } from './div';

export const safeDiv = (b: number) => div(b || 1);
