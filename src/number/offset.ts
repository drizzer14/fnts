import { clamp } from './clamp';

export const offset = (max: number) => (x: number) => clamp(0, max)((x < 0) ? (max + x) : x);
