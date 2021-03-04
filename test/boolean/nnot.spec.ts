import { nnot } from 'fnts/boolean/nnot';

describe ('nnot', () => {
  describe ('when the value is considered truthy', () => {
    it ('should return false', () => {
      [
        true,
        0,
        1,
        '',
        'string',
        {},
        [],
        () => {},
        Symbol.for ('test'),
      ].forEach ((value) => expect (nnot (value)).toBe (false));
    });
  });

  describe ('when the value is nullable or false', () => {
    it ('should return true', () => {
      [false, null, undefined].forEach ((value) => expect (nnot (value)).toBe (true));
    });
  });
});
