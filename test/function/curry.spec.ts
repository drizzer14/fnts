import { curry as sut } from 'fnts/function'

const fn = (a: number, b: number): number => a + b

describe('curry', () => {
  describe('when applied arguments count is less than the function expects', () => {
    it('should return a new function which expects the rest of the arguments', () => {
      expect(
        sut(fn)(2)(1),
      ).toBe(3)
    })
  })

  describe('when applied arguments count is more than the function expects', () => {
    it('should apply only the count of arguments the function expects', () => {
      expect(
        // @ts-expect-error
        sut(fn)(1, 2, 3),
      ).toBe(3)
    })
  })
})
