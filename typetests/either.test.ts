import either, { Either } from '../src/either'
import left, { Left } from '../src/either/left'
import bindr from '../src/either/operators/bindr'
import right, { Right } from '../src/either/right'
import eitherSync from '../src/either/either-sync'
import bimap, { first, second } from '../src/either/operators/bimap'
import bifold, { bifoldl, bifoldr } from '../src/either/operators/bifold'
import bifoldMap, { bifoldlMap, bifoldrMap } from '../src/either/operators/bifold-map'

import tacit from './tacit'

// region either

either<Error, number>(
  () => Promise.resolve(1)
).then((e) => {
  const a1: Either<Error, number> = e
})

either<Error, number>(
  // @ts-expect-error
  () => Promise.resolve('1')
).then((e) => {
  const a2: Either<Error, number> = e
})

// endregion

// region eitherSync

const b1: Either<Error, number> = eitherSync<Error, number>(
  () => 1
)

const b2: Either<Error, number> = eitherSync<Error, number>(
  // @ts-expect-error
  () => '1'
)

// endregion

declare const monad: Either<Error, number>

// region bifold

const c1: Error | number = bifold(monad)

const c2: Error = bifold(monad as Left<Error>)

const c3: number = bifold(monad as Right<number>)

const c4: Error | undefined = bifoldl(monad)

const c5: Error = bifoldl(monad as Left<Error>)

const c6: undefined = bifoldl(monad as Right<number>)

const c7: number | undefined = bifoldr(monad)

const c8: number = bifoldr(monad as Right<number>)

const c9: undefined = bifoldr(monad as Left<Error>)

// endregion

// region bifoldMap

const d1: string = bifoldMap(
  monad,
  (l) => {
    const _l: Error = l
    return ''
  },
  (r) => {
    const _r: number = r
    return ''
  }
)

const d2: string = bifoldMap(
  monad,
  (e) => {
    const _e: Error | number = e
    return ''
  },
)

const d3: string = tacit(
  bifoldMap(
  (e) => {
      const _e: Error | number = e
      return ''
    },
  ),
  monad
)

const d4: string = tacit(
  bifoldMap(
    (
      (l) => {
        const _l: Error = l
        return ''
      }
    ),
    (
      (r) => {
        const _r: number = r
        return ''
      }
    )
  ),
  monad
)

const d5: string | undefined = bifoldlMap(
  monad,
  (l) => {
    const _l: Error = l
    return ''
  },
)

const d6: string | undefined = tacit(
  bifoldlMap(
    (l) => {
      const _l: Error = l
      return ''
    },
  ),
  monad
)

const d7: string | undefined = bifoldrMap(
  monad,
  (r) => {
    const _r: number = r
    return ''
  },
)

const d8: string | undefined = tacit(
  bifoldrMap(
    (r) => {
      const _r: number = r
      return ''
    }
  ),
  monad
)

// endregion

// region bimap

const e1: Either<number, string> = bimap(
  monad,
  (l) => {
    const _l: Error = l
    return 1
  },
  (r) => {
    const _r: number = r
    return ''
  }
)

const e2: Either<number, string> = tacit(
  bimap(
    (l) => {
      const _l: Error = l
      return 1
    },
    (r) => {
      const _r: number = r
      return ''
    }
  ),
  monad
)

const e3: Either<string, number> = first(
  monad,
  (l) => {
    const _l: Error = l
    return ''
  }
)

const e4: Either<string, number> = tacit(
  first(
    (l) => {
      const _l: Error = l
      return ''
    }
  ),
  monad
)

const e5: Either<Error, string> = second(
  monad,
  (r) => {
    const _r: number = r
    return ''
  },
)

const e6: Either<Error, string> = tacit(
  second(
    (r) => {
      const _r: number = r
      return ''
    },
  ),
  monad
)

// endregion

// region bindr

const f1: Either<Error, string> = bindr(
  monad,
  (r) => {
    const _r: number = r
    return right<string>() as Either<Error, string>
  }
)

const f2: Either<Error, string> = tacit(
  bindr(
    (r) => {
      const _r: number = r
      return left()
    }
  ),
  monad
)

// endregion
