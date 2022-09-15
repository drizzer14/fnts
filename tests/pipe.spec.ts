import sut from '../src/pipe'

describe('pipe', () => {
  describe('when provided with arbitrary amount of functions', () => {
    it('should apply them in left-to-right order starting from the argument', () => {
      expect(
        sut(
          (x: number) => `${x * 10}`,
          (s: string) => s.split(''),
        )(5)
      ).toStrictEqual(['5', '0'])
    })
  })

  describe('when the first function requires several arguments', () => {
    it('should apply them and continue the pipeline with unary functions', () => {
      expect(
        sut(
          (a: number, b: number) => a + b,
          (x: number) => `${x * 10}`,
          (s: string) => s.split(''),
        )(2, 3)
      ).toStrictEqual(['5', '0'])
    })
  })
})
