import { compose } from 'fnts/function'
import { decr, incr } from 'fnts/number'
import { right as sut } from 'fnts/monad/either'

describe('right', () => {
  describe('bind / ()', () => {
    describe('when called with a function producing a monad', () => {
      it('should return new either with produced value', () => {
        const monad = sut(5)(compose(sut, incr))

        expect(monad.isRight()).toBe(true)
        expect(monad.fold()).toBe(6)
      })
    })
  })

  describe('map', () => {
    it('should apply right mapping function', () => {
      expect(
        sut(5).map(decr, incr).fold(),
      ).toBe(6)
    })
  })

  describe('foldMap', () => {
    it('should apply right mapping function and return contained value', () => {
      expect(
        sut(5).foldMap(decr, incr),
      ).toBe(6)
    })
  })
})
