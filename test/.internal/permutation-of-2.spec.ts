import { permutationOf2 as sut } from 'fnts/.internal/permutation-of-2'

const subtract = (a: number, b: number): number => a - b

describe('curry2', () => {
  describe('when `shouldCurry` predicate is specified', () => {
    describe('when the predicate is `true`', () => {
      it('should curry the second argument reversing the application order', () => {
        expect(
          sut(subtract, () => true)(1)(3),
        ).toBe(2)
      })
    })

    describe('when the predicate is `false`', () => {
      describe('when the second argument is `undefined`', () => {
        it('should curry the second argument reversing the application order', () => {
          expect(
            sut(subtract, () => false)(1)(3),
          ).toBe(2)
        })
      })

      describe('when the second argument is defined', () => {
        it('should not curry, applying arguments it order', () => {
          expect(
            sut(subtract, () => false)(3, 1),
          ).toBe(2)
        })
      })
    })
  })
})
