import { reverse as sut } from 'fnts/function/reverse'

describe('reverse', () => {
  it('should reverse function\'s arguments', () => {
    const fn = (a: number, b: number, c: number): number => a - b - c

    expect(
      sut(fn)(1, 2, 3)
    ).toBe(0)
  })
})
