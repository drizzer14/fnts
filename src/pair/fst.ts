import type { Pair } from './pair';

export const fst = <T extends Pair>([f]: T): T[0] => f;
