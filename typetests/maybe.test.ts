import nothing from '../src/maybe/nothing';
import maybe, { Maybe } from '../src/maybe'
import just, { Just } from '../src/maybe/just'
import bind from '../src/maybe/operators/bind'
import fmap from '../src/maybe/operators/fmap'
import fold from '../src/maybe/operators/fold'
import foldMap from '../src/maybe/operators/fold-map'

import tacit from './tacit'

// region maybe

const a1: Maybe<number> = maybe(1)

const a2: Maybe<number> = maybe(1 as number | undefined)

const a3: Maybe<number> = maybe(1 as number | null)

const a4: Maybe<number> = maybe(1 as number | undefined | null)

// endregion

// region bind

const b1: Maybe<string> = bind(
  maybe(1),
  (v) => {
    const _v: number = v
    return just(`${v}`)
  }
)

const b2: Maybe<string> = tacit(
  bind<number, string>(
    (v) => {
      const _v: number = v
      return just(`${v}`)
    }
  ),
  maybe(1)
)

const b3: Maybe<unknown> = bind(
  maybe(1),
  (v) => {
    const _v: number = v
    return nothing()
  }
)

const b4: Maybe<string> = tacit(
  bind(
    (v) => {
      const _v: number = v
      return nothing()
    }
  ),
  maybe(1)
)

// endregion

// region fmap

const c1: Maybe<string> = fmap(
  maybe(1),
  (v) => {
    const _v: number = v
    return `${v}`
  }
)

const c2: Maybe<string> = tacit(
  fmap(
    (v) => {
      const _v: number = v
      return `${v}`
    }
  ),
  maybe(1)
)

// endregion

// region fold

const d1: number | undefined = fold(maybe(1))

const d2: number = fold(just(1))

// endregion

// region foldMap

const e1: string | undefined = foldMap(
  maybe(1),
  (v) => {
    const _v: number = v
    return `${v}`
  }
)

const e2: string | undefined = tacit(
  foldMap(
    (v) => {
      const _v: number = v
      return `${v}`
    }
  ),
  maybe(1)
)

// endregion
