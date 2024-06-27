import get from '../src/lens/get'

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
        null
      ]
    }
  }
}

// region full

const a1: number = get(
  source,
  'a'
)

const a2: boolean = get(
  source,
  'b.c'
)

const a3: string = get(
  source,
  'b.d.e.0.f'
)

const a4: null[] = get(
  source,
  'b.d.g'
)

const a5: null = get(
  a4,
  '0'
)

// endregion

// region tacit path-first

const b1: number = tacit(
  get(
    'a'
  ),
  source
)

const b2: boolean = tacit(
  get(
    'b.c'
  ),
  source
)

const b3: string = tacit(
  get(
    'b.d.e.0.f'
  ),
  source
)

const b4: null[] = tacit(
  get(
    'b.d.g'
  ),
  source
)

const b5: null = tacit(
  get(
    '0'
  ),
  b4
)

// endregion

// region tacit source-first

const lens = get(source)

const c1: number = lens('a')

const c2: boolean = lens('b.c')

const c3: string = lens('b.d.e.0.f')

const c4: null[] = lens('b.d.g')

const c5: null = get(c4)('0')

// endregion
