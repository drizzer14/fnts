import sut from '../src/get'

describe('get', () => {
  describe('when accessing a property', () => {
    it('should return that property\'s value', () => {
      expect(
        sut(
          { a: { b: { c: 1 } } },
          'a.b.c'
        )
      ).toBe(1)
    })
  })

  describe('when accessing a nested array\'s element', () => {
    it('should return that element by index', () => {
      expect(
        sut(
          { a: { b: { c: [1] } } },
          'a.b.c.0'
        )
      ).toBe(1)
    })

    describe('when an element is object', () => {
      it('should access its fields', () => {
        expect(
          sut(
            { a: { b: { c: [{ a: { b: 2 } }] } } },
            'a.b.c.0.a.b'
          )
        ).toBe(2)
      })
    })
  })
})
