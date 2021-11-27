import sut from '../src/rethrow'
import type { Effect } from '../src/types/effect';

describe('rethrow', () => {
  let effect: Effect<(error: Error) => any>
  let error: Error

  beforeEach(() => {
    effect = jest.fn()
    error = new Error()
  })

  it('should perform provided side effect of the received error', () => {
    try {
      sut(effect)(error)
    } catch {
      expect(effect).toHaveBeenCalledWith(error)
    }
  })

  it('should rethrow the received error', () => {
    expect(() => sut(effect)(error)).toThrowError(error)
  })
})
