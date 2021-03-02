import { flatr } from 'fnts/array';

describe('flatr', () => {
  it('should reduce an array to the accumulator right-to-left', () => {
    expect(
      flatr<number>((c, a) => a / c, 6)([1, 2, 3])
    ).toBe(1);
  });
});
