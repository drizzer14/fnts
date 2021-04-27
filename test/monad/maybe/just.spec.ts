import { just } from 'fnts/monad/maybe'

describe('just', () => {
  describe('bind / ()', () => {
    describe('when called with a function producing a monad', () => {
      it('should return new maybe with produced value', () => {
        const monad = just(5)((x) => just(x + 1))

        expect(monad.isJust()).toBe(true)
        expect(monad.fold()).toBe(6)
      })
    })
  })

  describe('map', () => {
    it('should produce new monad with mapped value', () => {
      const monad = just(5).map((x) => x + 1)

      expect(monad.isJust()).toBe(true)
      expect(monad.fold()).toBe(6)
    })
  })

  describe('foldMap', () => {
    it('should return mapped value', () => {
      expect(just(5).foldMap((x) => x + 1)).toBe(6)
    })
  })

  describe('ap', () => {
    it('should apply a function from another monad to contained value', () => {
      const monad = just(5).ap(just((x: number) => x + 1))

      expect(monad.isJust()).toBe(true)
      expect(monad.fold()).toBe(6)
    })
  })
})
