import { match as sut } from 'fnts/string'

describe('match', () => {
  describe('when regexp is matched within a given string', () => {
    it('should return just the matched parts', () => {
      const result = sut(/b/)('abc')

      expect(result.isJust()).toBe(true)
      expect(result.fold()?.[0]).toBe('b')
    })
  })

  describe('when regexp is not matched within a given string', () => {
    it('should return nothing', () => {
      const result = sut(/d/)('abc')

      expect(result.isNothing()).toBe(true)
      expect(result.fold()).toBeUndefined()
    })
  })
})
