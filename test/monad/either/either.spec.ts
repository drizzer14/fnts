import { either, eitherN, eitherS } from 'fnts/monad/either'

describe('either', () => {
  describe('eitherN – nullable', () => {
    const sut = eitherN

    describe('when provided a nullable value', () => {
      it('should produce left monad', () => {
        [
          null,
          undefined,
        ].forEach((value) => {
          const monad = sut(() => value, () => value)

          expect(monad.isLeft()).toBe(true)
          expect(monad.isRight()).toBe(false)
        })
      })
    })

    describe('when provided a non-nullable value', () => {
      it('should produce right monad', () => {
        [
          0,
          1,
          '',
          'string',
          [],
          {},
          () => {
          },
          true,
          false,
          Symbol.for('test'),
        ].forEach((value) => {
          const monad = sut(() => value, () => value)

          expect(monad.isLeft()).toBe(false)
          expect(monad.isRight()).toBe(true)
        })
      })
    })
  })

  describe('eitherS – sync', () => {
    const sut = eitherS

    describe('when right function throws', () => {
      it('should produce left monad', () => {
        const monad = sut(
          (error) => (error as Error).message,
          () => {
            throw new Error('left')
          },
        )

        expect(monad.isLeft()).toBe(true)
        expect(monad.fold()).toBe('left')
      })
    })

    describe('when right function resolves successfully', () => {
      it('should produce right monad', () => {
        const monad = sut(
          (error) => (error as Error).message,
          () => 5,
        )

        expect(monad.isRight()).toBe(true)
        expect(monad.fold()).toBe(5)
      })
    })
  })

  describe('either – async', () => {
    const sut = either

    describe('when right function rejects', () => {
      it('should produce left monad', async () => {
        const monad = await sut(
          (error) => (error as Error).message,
          async () => Promise.reject(new Error('left')),
        )

        expect(monad.isLeft()).toBe(true)
        expect(monad.fold()).toBe('left')
      })
    })

    describe('when right function resolves', () => {
      it('should produce right monad', async () => {
        const monad = await sut(
          (error) => (error as Error).message,
          async () => Promise.resolve(5),
        )

        expect(monad.isRight()).toBe(true)
        expect(monad.fold()).toBe(5)
      })
    })
  })
})
