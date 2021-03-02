import { compose } from '../function';
import { indexOf as indexOfA } from '../array';

import { split } from './split';

export const indexOf = (substring: string, fromPosition?: number) => {
  return compose(indexOfA(substring, fromPosition), split(''));
};
