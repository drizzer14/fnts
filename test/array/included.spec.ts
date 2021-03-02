import { included } from 'fnts/array';

describe('included', () => {
  it('should return true if the array has an element', () => {
    expect(
      included([1])(1)
    ).toBe(true);
  });

  it('should return false if the array does not have an element', () => {
    expect(
      included([1])(2)
    ).toBe(false);
  });
});
