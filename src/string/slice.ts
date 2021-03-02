import { compose } from '../function';
import { join, slice as sliceA } from '../array';

import { split } from './split';

export const slice = (start?: number, end?: number) => (string: string): string => {
  return join('')(compose(sliceA(start, end), split(''))(string));
}
