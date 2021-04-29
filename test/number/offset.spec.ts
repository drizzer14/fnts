import { offset as sut } from 'fnts/number'

describe('offset', () => {
  describe('when the number is greater than or equals 0', () => {
    describe('when the number is between 0 and max', () => {
      it('should return the number', () => {
        expect(sut(3, 5)).toBe(3)
      })
    })

    describe('when the number is greater than max', () => {
      it('should return max', () => {
        expect(sut(6, 5)).toBe(5)
      })
    })
  })

  describe('when the number is less than 0', () => {
    describe('when the absolute value of the number is less than or equals max', () => {
      it('should return the offset from max to the left', () => {
        expect(sut(-1, 5)).toBe(4)
      })
    })

    describe('when the absolute value of the number is greater than max', () => {
      it('should return 0', () => {
        expect(sut(-6, 5)).toBe(0)
      })
    })
  })
})
