import sut from '../../src/permutation/permutation-3'

const subAndDiv = (a: number, b: number, c: number): number => (a + b) / c

describe('curry3', () => {
  describe('when third argument is `undefined`', () => {
    it('should curry first argument pushing the application order to the right', () => {
      expect(
        sut(subAndDiv)(2, 3)(7)
      ).toBe(3)
    })
  })

  describe('when third argument is defined', () => {
    it('should not curry, applying the arguments in order', () => {
      expect(
        sut(subAndDiv)(7, 2, 3)
      ).toBe(3)
    })
  })
})
