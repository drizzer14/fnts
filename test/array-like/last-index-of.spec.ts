import { lastIndexOf } from 'fnts/array-like'

describe('lastIndexOf', () => {
  describe('array', () => {
    describe('when the element is in the array', () => {
      it('should return just of that element\'s last appearance index', () => {
        const result = lastIndexOf(2)([1, 2, 2])

        expect(result.isJust()).toBe(true)
        expect(result.fold()).toBe(2)
      })
    })

    describe('when the element is not in the array', () => {
      it('should return nothing', () => {
        const result = lastIndexOf(2)([1])

        expect(result.isNothing()).toBe(true)
        expect(result.fold()).toBeUndefined()
      })
    })
  })

  describe('string', () => {
    describe('when the substring is in the string', () => {
      it('should return just of that element\'s last appearance index', () => {
        const result = lastIndexOf('b')('abcb')

        expect(result.isJust()).toBe(true)
        expect(result.fold()).toBe(3)
      })
    })

    describe('when the substring is not in the string', () => {
      it('should return nothing', () => {
        const result = lastIndexOf('d')('abc')

        expect(result.isNothing()).toBe(true)
        expect(result.fold()).toBeUndefined()
      })
    })
  })
})
