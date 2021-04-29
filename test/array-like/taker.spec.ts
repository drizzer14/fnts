import { taker as sut } from 'fnts/array-like'

describe('taker', () => {
  it('should return new array with specified amount of elements from the left', () => {
    expect(
      sut(2)([1, 2, 3, 4]),
    ).toStrictEqual([3, 4])
  })

  it('should return new string with specified amount of characters from the left', () => {
    expect(
      sut(2)([1, 2, 3, 4]),
    ).toStrictEqual([3, 4])
  })
})
