import { at as sut } from 'fnts/array-like'

describe('at', () => {
  describe('array', () => {
    describe('when index is a positive number', () => {
      it('should return array\'s element by the given index starting from 0', () => {
        expect(sut(2)([1, 2, 3])).toBe(3)
      })
    })

    describe('when index is a negative number', () => {
      it('should return array\'s element by the given index starting from -1 from the right', () => {
        expect(sut([1, 2, 3], -1)).toBe(3)
        expect(sut(-3)([1, 2, 3])).toBe(1)
      })
    })
  })

  describe('string', () => {
    describe('when position is a positive number', () => {
      it('should return string\'s substring by the given position starting from 0', () => {
        expect(sut('abc', 2)).toBe('c')
      })
    })

    describe('when position is a negative number', () => {
      it('should return string\'s substring by the given position starting from -1 from the right', () => {
        expect(sut(-1)('abc')).toBe('c')
        expect(sut('abc', -3)).toBe('a')
      })
    })
  })
})
