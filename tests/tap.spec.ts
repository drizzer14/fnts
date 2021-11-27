import sut from '../src/tap'

describe('tap', () => {
  jest.spyOn(console, 'log').mockImplementation(() => {})

  it('should perform a side effect of the provided argument', () => {
      sut<number>(
        console.log
      )(5)

      expect(console.log).toHaveBeenCalledWith(5)
    }
  )

  it('should return the provided argument', () => {
      expect(
        sut<number>(
          console.log
        )(5)
      ).toBe(5)
    }
  )
})
