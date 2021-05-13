import { permutationOf3 } from '../.internal/permutation-of-3'

export type Mapper<T, R = T> = (element: T, index: number, list: T[]) => R

export type Predicate<T> = Mapper<T, boolean>

export interface ComprehendFn {
  <T, R = T >(filter: Predicate<T>, map: Mapper<T, R>): (list: T[]) => R[]

  <T, R = T >(list: T[], filter: Predicate<T>, map: Mapper<T, R>): R[]
}

export const comprehend = permutationOf3(
  <T, R = T> (
    list: T[],
    filter: Predicate<T>,
    map: Mapper<T, R>,
  ): R[] => {
    const length = list.length
    const target: R[] = []

    for (let index = 0; index < length; index += 1) {
      const current = list[index]

      if (filter(current, index, list)) {
        target.push(map(current, index, list))
      }
    }

    return target
  }
) as ComprehendFn
