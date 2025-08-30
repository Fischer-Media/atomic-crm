// src/lib/formatters/address.ts
import type { Contact } from "../types"

export function formatContactAddress(c: Partial<Contact>) {
  const line1 = [c.address_line1, c.address_line2].filter(Boolean).join(', ')
  const line2 = [c.city, c.state, c.postal_code].filter(Boolean).join(', ')
  return [line1, line2].filter(Boolean).join('\n')
}

