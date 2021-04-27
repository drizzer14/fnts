import { capitalize } from 'fnts/string'

describe('capitalize', () => {
  it('should return new string with capital first letter', () => {
    expect(capitalize('jest')).toBe('Jest')
  })
})
