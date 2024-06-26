import sut from '../src/lens/set'

describe('set', () => {
  describe('when setting a property', () => {
    it('should return source copy with modified value', () => {
      const source = { a: { b: { c: 1 } } }
      const result = sut(source, 'a.b.c', 2)
      
      expect(result).toEqual({ a: { b: { c: 2 } } })
      expect(source === result).toBe(false)
    })
  })

  describe('when setting a nested array\'s element', () => {
    it('should return source copy with modified value', () => {
      const source = { a: { b: { c: [1] } } }
      const result = sut(source, 'a.b.c.0', 2)

      expect(result).toEqual({ a: { b: { c: [2] } } })
      expect(source === result).toBe(false)
    })

    describe('when an element is object', () => {
      it('should return source copy with modified value', () => {
        const source = { a: { b: { c: [{ a: { b: 2 } }] } } }
        const result = sut(source, 'a.b.c.0.a.b', 3)

        expect(result).toEqual({ a: { b: { c: [{ a: { b: 3 } }] } } })
        expect(source === result).toBe(false)
      })
    })
  })
})
