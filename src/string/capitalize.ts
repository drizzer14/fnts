import { toUpperCase } from './to-upper-case'

export const capitalize = <T extends string> ([head, ...tail]: T): Capitalize<T> => {
  return `${toUpperCase(head)}${tail.join('')}` as Capitalize<T>
}
