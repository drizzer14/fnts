import { compose } from '../function';
import { lastIndexOf as lastIndexOfA } from '../array';

import { split } from './split';

export const lastIndexOf = (substring: string, fromPosition?: number) => {
  return compose(lastIndexOfA(substring, fromPosition), split(''));
}
