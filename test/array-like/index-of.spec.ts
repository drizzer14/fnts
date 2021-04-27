import { indexOf } from 'fnts/array-like'

describe('indexOf', () => {
  describe('array', () => {
    describe('when the element is in the array', () => {
      it('should return just of that element\'s first appearance index', () => {
        expect(
          indexOf(1)([1, 1]).fold(),
        ).toBe(0)
      })
    })

    describe('when the element is not in the array', () => {
      it('should return nothing', () => {
        expect(
          indexOf(2)([1]).fold(),
        ).toBeUndefined()
      })
    })
  })

  describe('string', () => {
    describe('when the substring is in the string', () => {
      it('should return just of that element\'s first appearance index', () => {
        expect(
          indexOf('a')('abc').fold(),
        ).toBe(0)
      })
    })

    describe('when the substring is not in the string', () => {
      it('should return nothing', () => {
        expect(
          indexOf('d')('abc').fold(),
        ).toBeUndefined()
      })
    })
  })
})
