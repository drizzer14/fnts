import { taker } from 'fnts/array';

describe('taker', () => {
  it('should return new array with specified amount of elements from the left', () => {
    expect(
      taker(2)([1, 2, 3, 4])
    ).toStrictEqual([3, 4]);
  });
});
