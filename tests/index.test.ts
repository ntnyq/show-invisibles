import { expect, it } from 'vitest'
import { showInvisibles } from '../src'

it('Should match', () => {
  expect(showInvisibles('')).toMatchInlineSnapshot(`""`)

  expect(showInvisibles('1 2\n3\t4\r5')).toMatchInlineSnapshot(`"1·2⏎3↹4␍5"`)
})

it('should throw when non string', () => {
  // @ts-expect-error type
  expect(() => showInvisibles(1)).toThrow(
    'Expected input to type string, got number',
  )
  // @ts-expect-error type
  expect(() => showInvisibles(true)).toThrow(
    'Expected input to type string, got boolean',
  )
  // @ts-expect-error type
  expect(() => showInvisibles([])).toThrow(
    'Expected input to type string, got object',
  )
  // @ts-expect-error type
  expect(() => showInvisibles(1n)).toThrow(
    'Expected input to type string, got bigint',
  )
  // @ts-expect-error type
  expect(() => showInvisibles(undefined)).toThrow(
    'Expected input to type string, got undefined',
  )
})
