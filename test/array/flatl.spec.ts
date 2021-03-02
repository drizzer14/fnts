import { flatl } from 'fnts/array';

describe('flatl', () => {
  it('should reduce an array to the accumulator left-to-right', () => {
    expect(
      flatl<number>((a, c) => a / c, 6)([3, 2, 1])
    ).toBe(1);
  });
});
