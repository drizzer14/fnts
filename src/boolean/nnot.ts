import { not } from './not';
import { included } from '../array';

export const nnot = <T>(x: T): boolean => {
  if (included([0, ''])(x)) {
    return false;
  }

  return not(x);
}
