import set from '../src/lens/set'

import tacit from './tacit'

const source = {
  a: 1,
  b: {
    c: true,
    d: {
      e: [
        {
          f: ''
        }
      ],
      g: [
        3
      ]
    }
  }
}

// region full

const a1: typeof source = set(
  source,
  'a',
  2
)

const a2: typeof source = set(
  source,
  'b.c',
  false
)

const a3: typeof source = set(
  source,
  'b.d.e.0.f',
  'f'
)

const a4: typeof source = set(
  source,
  'b.d.g',
  [2]
)

// endregion

// region tacit path-first

const b1: typeof source = tacit(
  set(
    'a',
    2
  ),
  source
)

const b2: typeof source = tacit(
  set(
    'b.c',
    false
  ),
  source
)

const b3: typeof source = tacit(
  set(
    'b.d.e.0.f',
    'f'
  ),
  source
)

const b4: typeof source = tacit(
  set(
    'b.d.g',
    [2]
  ),
  source
)

// endregion

// region tacit source-first

const lens = set(source)

const c1: typeof source = lens('a', 2)

const c2: typeof source = lens('b.c', false)

const c3: typeof source = lens('b.d.e.0.f', 'f')

const c4: typeof source = lens('b.d.g', [2])

// endregion
