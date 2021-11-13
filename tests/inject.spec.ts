import sut from '../src/inject'

describe('inject', () => {
  jest.spyOn(console, 'log').mockImplementation(() => {})

  it('should perform a side effect with the function\'s arguments', () => {
    sut(
      (arg: number) => arg + 1,
      console.log
    )(5)

    expect(
      console.log
    ).toHaveBeenCalledWith(5)
  })

  it('should preserve the original function', () => {
    expect(
      sut(console.log)(
        (arg: number) => arg + 1,
      )(5)
    ).toBe(6)
  })
})
