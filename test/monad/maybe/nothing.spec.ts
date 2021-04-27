import { just, nothing } from 'fnts/monad/maybe'

describe('nothing', () => {
  describe('bind / ()', () => {
    it('should return new nothing monad', () => {
      expect(nothing()(nothing).isNothing()).toBe(true)
    })
  })

  describe('map', () => {
    it('should return new nothing monad', () => {
      expect(nothing().map(() => 1).isNothing()).toBe(true)
    })
  })

  describe('fold', () => {
    it('should return undefined', () => {
      expect(nothing().fold()).toBeUndefined()
    })
  })

  describe('foldMap', () => {
    it('should return undefined', () => {
      expect(nothing().foldMap(() => null)).toBeUndefined()
    })
  })

  describe('ap', () => {
    it('should return new nothing monad', () => {
      expect(nothing().ap(just((x: number) => x + 1)).isNothing()).toBe(true)
    })
  })
})
