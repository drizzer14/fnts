import { xor } from 'fnts/array';

describe ('xor', () => {
  describe ('when array is filled with truthy values only', () => {
    it ('should return false', () => {
      expect (xor ([true, true, true])).toBe (false);
    });
  });

  describe ('when array is filled with falsy values only', () => {
    it ('should return false', () => {
      expect (xor ([false, false, false])).toBe (false);
    });
  });

  describe ('when array is filled with both truthy and falsy values', () => {
    it ('should return true', () => {
      expect (xor ([true, false, true])).toBe (true);
    });
  });
});
