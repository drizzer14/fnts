import curry from '../src/curry'

const fn = curry((a: number, b: boolean, c: string): null => null)

const a1: null = fn(1, true, '')

const a2: null = fn(1, true)('')

const a3: null = fn(1)(true, '')

const a4: null = fn(1)(true)('')
