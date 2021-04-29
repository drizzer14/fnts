import { includes as sut } from 'fnts/string'

describe('includes', () => {
  describe('when the substring is in the string', () => {
    it('should return true', () => {
      expect(
        sut('a')('abc'),
      ).toBe(true)
    })
  })

  describe('when the substring is not in the string', () => {
    it('should return false', () => {
      expect(
        sut('d')('abc'),
      ).toBe(false)
    })
  })
})
