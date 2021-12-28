import sut from '../src/curry';

describe('curry', () => {
  const fn = sut((a: number, b: string, c: boolean): [number, string, boolean] => [a, b, c])

  describe('when amount of arguments is less than curry length', () => {
    it('should curry until amount of arguments reaches length', () => {
      [
        fn(0),
        fn(0, ''),
        fn(0)('')
      ].forEach((fixture) => {
        expect(fixture).toBeInstanceOf(Function)
      })
    })
  })

  describe('when amount of arguments equals to curry length', () => {
    it('should return function\'s result', () => {
      [
        fn(0, '', true),
        fn(0)('')(true),
        fn(0, '')(true),
        fn(0)('', true)
      ].forEach((fixture) => {
        expect(fixture).toStrictEqual([0, '', true])
      })
    })
  })

  describe('when amount of arguments is more than curry length', () => {
    it('should return function\'s result neglecting excess arguments', () => {
      [
        // @ts-expect-error
        fn(0, '', true, false),
        // @ts-expect-error
        fn(0)('')(true, false),
        // @ts-expect-error
        fn(0, '')(true, false),
        // @ts-expect-error
        fn(0)('', true, false)
      ].forEach((fixture) => {
        expect(fixture).toStrictEqual([0, '', true])
      })
    });
  })
})
