import { ltr } from 'fnts/order'
import { Predicate, takeWhile as sut } from 'fnts/array'

describe('takeWhile', () => {
  let result: number[]
  let predicate: Predicate<number>

  beforeEach(() => {
    predicate = jest.fn(ltr(3))
  })

  it('should return elements satisfying the predicate', () => {
    result = sut(predicate)([1, 2, 3, 4])

    expect(result).toStrictEqual([1, 2])
  })

  it('should terminate execution after the first element satisfying the predicate', () => {
    result = sut([1, 2, 3, 4], predicate)

    expect(predicate).toHaveBeenCalledTimes(3)
  })
})
