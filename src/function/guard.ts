import { last } from '../list/last'
import { fst, snd } from '../list/pair'

import { ap } from './ap'
import { compose } from './compose'

export type Guard<Function extends (...args: any[]) => any> = [
  <Result extends boolean>(...args: Parameters<Function>) => Result,
  Function
]

export const guard =
  <Function extends (...args: any[]) => any> (
    ...guards: [...Guard<Function>[], Function]
  ) =>
    (...args: Parameters<Function>): ReturnType<Function> => {
      const defaultGuard: Guard<Function> = [() => true, last(guards)]

      return compose(
        ap(...args),
        snd,
      )(
        ([...guards.slice(0, -1), defaultGuard] as Guard<Function>[]).find(
          compose(ap(...args), fst),
        )!,
      )
    }
