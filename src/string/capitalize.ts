import { compose } from '../function';

import { head } from './head';
import { tail } from './tail';
import { toUpperCase } from './to-upper-case';

export const capitalize = (string: string): string => {
  return `${compose(toUpperCase, head)(string)}${tail(string)}`;
};
