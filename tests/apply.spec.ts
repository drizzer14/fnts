import sut from '../src/apply';

describe('apply', () => {
  it('should apply all functions on arguments and return an array of results', () => {
    expect(
      sut(
        (a: number, b: number) => a + b,
        (a: number, b: number) => a - b,
        (a: number, b: number) => a / b,
        (a: number, b: number) => a * b,
      )(3, 2)
    ).toStrictEqual([
      5,
      1,
      1.5,
      6
    ])
  })
})
