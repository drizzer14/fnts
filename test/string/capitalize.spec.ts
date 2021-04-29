import { capitalize as sut } from 'fnts/string'

describe('capitalize', () => {
  it('should return new string with capital first letter', () => {
    expect(sut('jest')).toBe('Jest')
  })
})
