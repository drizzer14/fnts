import { slice } from 'fnts/array';

describe('slice', () => {
  describe('when no arguments are provided', () => {
    it('should return the copy of the original array', () => {
      expect(
        slice()([1, 2, 3])
      ).toStrictEqual([1, 2, 3]);
    });
  });

  describe('when start is a positive number', () => {
    describe('when end is not specified', () => {
      it('should return new array with elements from the start position', () => {
        expect(
          slice(2)([1, 2, 3])
        ).toStrictEqual([3]);
      });
    });

    describe('when end is a positive number', () => {
      it('should return new array with elements from the start position to the end position (excluding last)', () => {
        expect(
          slice(0, 2)([1, 2, 3])
        ).toStrictEqual([1, 2]);
      });
    });

    describe('when end is a negative number', () => {
      it('should return new array with elements from the start position to the end position from the right (excluding last)', () => {
        expect(
          slice(0, -1)([1, 2, 3])
        ).toStrictEqual([1, 2]);
      });
    });
  });

  describe('when start is a negative number', () => {
    describe('when end is not specified', () => {
      it('should return new array with elements from the start position from the right', () => {
        expect(
          slice(-2)([1, 2, 3])
        ).toStrictEqual([2, 3]);
      });
    });

    describe('when end is a positive number', () => {
      it('should return new array with end elements from the start position from the right', () => {
        expect(
          slice(-3, 2)([1, 2, 3, 4, 5])
        ).toStrictEqual([3, 4]);
      });
    });

    describe('when end is a negative number', () => {
      it('should return new array with elements from the start position to the end position from the right', () => {
        expect(
          slice(-3, -1)([1, 2, 3, 4, 5])
        ).toStrictEqual([3, 4, 5]);
      });
    });
  });
});
