import { reverse } from 'fnts/string';

describe('reverse', () => {
  it('should return reversed copy of a given string', () => {
    expect(reverse('abc')).toBe('cba');
  });
});
