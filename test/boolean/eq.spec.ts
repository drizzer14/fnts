import { eq } from 'fnts/boolean';
import { reverse } from 'fnts/array';

describe('eq', () => {
  const primitives = [1, '1', true, null, Symbol.for('test'), undefined];

  describe('when two primitive values are compared', () => {
    it('should return true', () => {
      primitives.forEach((value) => expect(eq(value)(value)).toBe(true));
    });

    it('should return false for different values', () => {
      [
        [1, 2],
        ['1', '2'],
        [true, false],
        [null, undefined],
        [Symbol.for('test1'), Symbol.for('test2')]
      ].forEach(
        (a, b) => expect(eq<any>(a)(b)).toBe(false)
      );
    });
  });

  describe('when two arrays are compared', () => {
    it('should return true for the same values under the same keys', () => {
      expect(eq(primitives)([...primitives])).toBe(true);
    });

    it('should return false for arrays with the different values under the same keys', () => {
      expect(eq(primitives)(reverse(primitives))).toBe(false);
    });
  });

  describe('when two objects are compared', () => {
    it('should return true for objects with the same values under the same keys', () => {
      const obj = {
        a: 1,
        b: 2,
        c: 3
      };

      expect(eq(obj)({ ...obj })).toBe(true);
    });

    it('should return false for objects with different values under the same keys', () => {
      expect(eq({ a: 1, b: 2, c: 3 })({ a: 3, b: 2, c: 1 })).toBe(false);
    });
  });
});
