import sut from '../src/tap'

describe('tap', () => {
  jest.spyOn(console, 'log').mockImplementation(() => {})

  it(
    'should perform a side effect with the curried argument',
    () => {
      sut<number>(
        console.log
      )(5)

      expect(console.log).toHaveBeenCalledWith(5)
    }
  )

  it(
    'should return the curried argument',
    () => {
      expect(
        sut<number>(
          console.log
        )(5)
      ).toBe(5)
    }
  )
})
