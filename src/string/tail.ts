import { join } from '../array';

export const tail = ([, ...t]: string) => join('')(t);
