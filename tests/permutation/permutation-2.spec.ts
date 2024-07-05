import sut from '../../src/permutation/permutation-2'

const subtract = (a: number, b = 1): number => a - b

describe('permutation2', () => {
  describe('when `shouldCurry` predicate is specified', () => {
    describe('when predicate is `true`', () => {
      it('should curry second argument reversing application order', () => {
        expect(
          sut(subtract, () => true)(1)(3),
        ).toBe(2)
      })
    })

    describe('when predicate is `false`', () => {
      describe('when second argument is `undefined`', () => {
        it('should not curry', () => {
          expect(
            sut(subtract, () => false)(1),
          ).toBe(0)
        })
      })

      describe('when second argument is defined', () => {
        it('should not curry applying arguments in order', () => {
          expect(
            sut(subtract, () => false)(3, 1),
          ).toBe(2)
        })
      })
    })
  })
})
