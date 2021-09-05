import sut from 'fnts/compose'

describe('compose', () => {
  describe('when provided with arbitrary amount of functions', () => {
    it('should apply them in right-to-left order starting from the argument', () => {
      expect(
        sut(
          (x: number) => `${x * 10}`,
          (x: number) => x + 1,
        )(5)
      ).toBe('60')
    })
  })
})
