import type { Slice } from './slice'

export type Tail<T extends readonly any[]> = Slice<T, 1>
