import pipe from '../src/pipe'
import identity from '../src/identity'
import fmap from '../src/maybe/operators/fmap'
import foldMap from '../src/maybe/operators/fold-map'
import maybe, { Maybe, just, nothing } from '../src/maybe'

import tacit from './tacit'

const a1: string = pipe(
  1, 2,
  (a: number, b: number): number => a + b,
  (value: number): string => `${value}`,
)

const a2: string = tacit(
  pipe(
    (a: number, b: number): number => a + b,
    (value: number): string => `${value}`,
  ),
  1, 2
)

const a3: Maybe<string> = tacit(
  pipe(
    (value: number) => value > 0 ? just(value) : nothing(),
    fmap((value) => `${value}`),
  ),
  5
)

const a4: Maybe<number> = tacit(
  pipe(
    (value: number) => value > 0 ? value : undefined,
    maybe,
  ),
  5
)

const a5: Maybe<string> = pipe(
  maybe(1),
  foldMap((v) => {
    const _v: number = v
    return `${v}`
  }),
  (maybe<string>),
)

const a6: Maybe<string> = tacit(
  pipe(
    foldMap((v) => {
      const _v: number = v
      return `${v}`
    }),
    maybe,
  ),
  maybe(1)
)

const a7: boolean = tacit(
  pipe(
    (<A, B>(a: A, b: B) => a && b)<number, {}>,
    (value) => `${value}` === 'true',
  ),
  1, {}
)

const a8: Maybe<boolean> = tacit(
  pipe(
    pipe(
      pipe(
        (<A, B>(a: A, b: B) => Number(a && b))<number, {}>,
        (value) => `${value}` === '1',
      ),
      pipe(
        identity,
        (value: number): string => `${value}`,
      ),
    ),
    pipe(
      pipe(
        (value: string) => value === '' ? nothing() : just(value),
        fmap((value) => value + 1),
      ),
      pipe(
        foldMap<string, boolean>((v) => {
          const _v: string = v
          return Boolean(v)
        }),
        maybe,
      ),
    ),
  ),
  1, {}
)
