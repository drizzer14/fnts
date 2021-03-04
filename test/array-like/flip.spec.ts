import { flip } from 'fnts/array-like';

describe ('flip', () => {
  it ('should create reversed copy of the original array', () => {
    expect (
      flip ([1, 2, 3])
    ).toStrictEqual ([3, 2, 1]);
  });

  it ('should create reversed copy of the original string', () => {
    expect (
      flip ('abc')
    ).toStrictEqual ('cba');
  });
});
