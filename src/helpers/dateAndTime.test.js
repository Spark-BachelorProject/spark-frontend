import { vi } from 'vitest'

import { isToday, formatDate } from './dateAndTime'

describe('isToday', () => {
  let originalToISOString

  beforeAll(() => {
    originalToISOString = Date.prototype.toISOString
    Date.prototype.toISOString = vi.fn(() => '2023-10-11T9:00:00.000Z')
  })

  afterAll(() => {
    Date.prototype.toISOString = originalToISOString
  })

  test.each([
    ['2023-10-10', false],
    ['2023-10-11', true],
    ['2023-10-12', false],
    ['2023-10-13', false],
    ['2023-10-17', false],
  ])('returns "%s" when the date string is %s', (dateString, expected) => {
    const result = isToday(dateString)
    expect(result).toBe(expected)
  })
})

describe('formatDate', () => {
  let originalToISOString

  beforeAll(() => {
    originalToISOString = Date.prototype.toISOString
    Date.prototype.toISOString = vi.fn(() => '2023-10-11T9:00:00.000Z')
  })

  afterAll(() => {
    Date.prototype.toISOString = originalToISOString
  })

  test.each([
    ['2023-10-11', 'Dzisiaj'],
    ['2023-10-12', 'Jutro'],
    ['2023-10-13', 'Pojutrze'],
    ['2023-10-17', 'Wtorek, 17 października 2023'],
  ])('returns "%s" when the date string is %s', (dateString, expected) => {
    const result = formatDate(dateString)
    expect(result).toBe(expected)
  })
})
