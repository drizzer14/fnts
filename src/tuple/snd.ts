import type { Pair } from './pair'

export const snd = <T extends Pair> ([, s]: T): T[1] => s
