import { gtr } from 'fnts/order'
import { decr } from 'fnts/number'
import { comprehend as sut } from 'fnts/array'

describe('comprehend', () => {
  describe('when predicate is specified', () => {
    it('should apply predicate and transformer to every element of the array', () => {
      expect(
        sut(
          decr,
          gtr(2),
        )([1, 2, 3, 4, 5]),
      ).toStrictEqual([2, 3, 4])

      expect(
        sut(
          [1, 2, 3, 4, 5],
          decr,
          gtr(2),
        ),
      ).toStrictEqual([2, 3, 4])
    })
  })
})
