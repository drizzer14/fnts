import compose from '../src/compose'
import identity from '../src/identity'
import fmap from '../src/maybe/operators/fmap'
import foldMap from '../src/maybe/operators/fold-map'
import maybe, { Maybe, just, nothing } from '../src/maybe'

import tacit from './tacit'

const a1: string = compose(
    (value: number): string => `${value}`,
    (a: number, b: number): number => a + b,
  1, 2
)

const a2: string = tacit(
  compose(
    (value: number): string => `${value}`,
    (a: number, b: number): number => a + b
  ),
  1, 2
)

const a3: Maybe<string> = tacit(
  compose(
    fmap((value) => `${value}`),
    (value: number) => value > 0 ? just(value) : nothing()
  ),
  5
)

const a4: Maybe<number> = tacit(
  compose(
    maybe,
    (value: number) => value > 0 ? value : undefined
  ),
  5
)

const a5: Maybe<string> = compose(
  (maybe<string>),
  foldMap((v) => {
    const _v: number = v
    return `${v}`
  }),
  maybe(1)
)

const a6: Maybe<string> = tacit(
  compose(
    (maybe<string>),
    foldMap((v) => {
      const _v: number = v
      return `${v}`
    }),
  ),
  maybe(1)
)

const a7: boolean = tacit(
  compose(
    (value) => `${value}` === 'true',
    (<A, B>(a: A, b: B) => a && b)<number, {}>
  ),
  1, {}
)

const a8: Maybe<boolean> = tacit(
  compose(
    compose(
      compose(
        maybe,
        foldMap<string, boolean>((v) => {
          const _v: string = v
          return Boolean(v)
        }),
      ),
      compose(
        fmap((value) => value + 1),
        (value: string) => value === '' ? nothing() : just(value)
      )
    ),
    compose(
      compose(
        (value: number): string => `${value}`,
        identity
      ),
      compose(
        (value) => `${value}` === '1',
        (<A, B>(a: A, b: B) => Number(a && b))<number, {}>
      )
    ),
  ),
  1, {}
)
