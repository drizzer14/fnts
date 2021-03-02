import { reverse } from 'fnts/array';

describe('reverse', () => {
  it('should create reversed copy of the original array', () => {
    expect(
      reverse([1, 2, 3])
    ).toStrictEqual([3, 2, 1]);
  });
});
