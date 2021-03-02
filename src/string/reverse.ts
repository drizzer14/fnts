import { compose } from '../function';
import { join, reverse as reverseA } from '../array';

import { split } from './split';

export const reverse = (string: string): string => join('')(compose(reverseA, split(''))(string));
