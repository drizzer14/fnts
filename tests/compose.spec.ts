import sut from '../src/compose'

describe('compose', () => {
  it('should apply both functions in right-to-left order starting from the argument', () => {
    expect(
      sut(
        (x: number) => `${x * 10}`,
        (x: number) => x + 1,
        5
      )
    ).toBe('60')
  })

  describe('when the last function requires several arguments', () => {
    it('should apply the arguments and continue', () => {
      expect(
        sut(
          (x: number) => `${x * 10}`,
          (a: number, b: number) => a + b
        )(2, 3)
      ).toBe('50')
    })
  })
})
