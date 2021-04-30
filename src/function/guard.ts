import { findl } from '../array'
import { fst } from '../tuple/fst'
import { snd } from '../tuple/snd'
import { last } from '../array-like/last'
import { sliceTo } from '../array-like/slice'

import { ap } from './ap'
import { compose } from './compose'

export type Guard<F extends (...args: any[]) => any> = [
  <G extends boolean>(...args: Parameters<F>) => G,
  F
]

export const guard = <F extends (...args: any[]) => any> (...guards: [...Guard<F>[], F]) => (...args: Parameters<F>): ReturnType<F> => {
  const defaultGuard = [() => true, last(guards)] as Guard<F>

  return findl(
    ([...sliceTo(guards, 0, -1), defaultGuard] as Guard<F>[]),
    compose(ap(...args), fst),
  ).foldMap(compose(ap(...args), snd))!
}
