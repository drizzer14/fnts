import { search as sut } from 'fnts/string'

describe('search', () => {
  describe('when provided regexp matches', () => {
    it('should return just the index of the found substring', () => {
      const result = sut(/b/)('abc')

      expect(result.isJust()).toBe(true)
      expect(result.fold()).toBe(1)
    })
  })

  describe('when provided regexp does not match', () => {
    it('should return nothing', () => {
      const result = sut(/d/)('abc')

      expect(result.isNothing()).toBe(true)
      expect(result.fold()).toBe(undefined)
    })
  })
})
