import sut from '../src/compose'

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

  describe('when the last function requires several arguments', () => {
    it('should apply them and continue the pipeline with unary functions', () => {
      expect(
        sut(
          (x: number) => `${x * 10}`,
          (x: number) => x + 1,
          (a: number, b: number) => a + b
        )(2, 3)
      ).toBe('60')
    })
  })
})
