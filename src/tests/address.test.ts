// src/lib/formatters/address.test.ts
import { expect, test } from 'vitest'
import { formatContactAddress } from "../misc/formatters"

test('formats street + city/state/zip', () => {
  const out = formatContactAddress({
    address_line1: '123 Main St', city: 'Lexington', state: 'KY', postal_code: '40502'
  })
  expect(out).toBe('123 Main St\nLexington, KY 40502')
})