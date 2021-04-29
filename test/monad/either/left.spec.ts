import { compose } from 'fnts/function'
import { decr, incr } from 'fnts/number'
import { left as sut } from 'fnts/monad/either'

describe('left', () => {
  describe('bind / ()', () => {
    describe('when called with a function producing a monad', () => {
      it('should return new either with produced value', () => {
        const monad = sut(5)(compose(sut, incr))

        expect(monad.isLeft()).toBe(true)
        expect(monad.fold()).toBe(6)
      })
    })
  })

  describe('map', () => {
    it('should apply left mapping function', () => {
      expect(
        sut(5).map(decr, incr).fold(),
      ).toBe(4)
    })
  })

  describe('foldMap', () => {
    it('should apply left mapping function and return contained value', () => {
      expect(
        sut(5).foldMap(decr, incr),
      ).toBe(4)
    })
  })
})
