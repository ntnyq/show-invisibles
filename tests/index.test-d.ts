import { assertType, describe, expectTypeOf, it } from 'vitest'
import { showInvisibles } from '../src'
import type { Options } from '../src'

describe('typecheck', () => {
  it('should type match', () => {
    assertType<(input: string, options?: Options) => string>(showInvisibles)
  })

  it('should return type match', () => {
    expectTypeOf(showInvisibles).returns.toBeString()
  })

  it('should params type match', () => {
    expectTypeOf(showInvisibles).parameters.toEqualTypeOf<[string, Options?]>()
  })
})
