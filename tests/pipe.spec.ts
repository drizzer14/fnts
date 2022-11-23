import sut from '../src/pipe'

describe('pipe', () => {
  it('should apply both functions in left-to-right order starting from the argument', () => {
    expect(
      sut(
        5,
        (x: number) => `${x * 10}`,
        (s: string) => s.split(''),
      )
    ).toStrictEqual(['5', '0'])
  })

  describe('when the first function requires several arguments', () => {
    it('should apply the arguments and continue', () => {
      expect(
        sut(
          (a: number, b: number) => a + b,
          (x: number) => `${x * 10}`,
        )(2, 3)
      ).toStrictEqual('50')
    })
  })
})
