import dayjs from 'dayjs'

import { isToday, formatDate, formatTimeHHMM, formatTimeAgo } from './dateAndTime'

describe('formatTimeAgo', () => {
  test.each([
    [dayjs().subtract(5, 'minute').valueOf(), '5 min temu'],
    [dayjs().subtract(2, 'hour').valueOf(), '2 godziny temu'],
    [dayjs().subtract(3, 'day').valueOf(), '3 dni temu'],
    [dayjs().subtract(7, 'day').valueOf(), dayjs().subtract(7, 'day').format('D.MM.YYYY, HH:mm')],
  ])('returns "%s" when the timestamp is %s', (timestamp, expected) => {
    const result = formatTimeAgo(timestamp)
    expect(result).toBe(expected)
  })
})

describe('isToday', () => {
  test.each([
    ['2023-10-10', false],
    [dayjs().format('YYYY-MM-DD'), true],
    ['2023-10-12', false],
    ['2023-10-13', false],
    ['2023-10-17', false],
  ])('returns "%s" when the date string is %s', (dateString, expected) => {
    const result = isToday(dateString)
    expect(result).toBe(expected)
  })
})

describe('formatTime', () => {
  // parametr is a timestamp in unix time, but in the way like this works fine
  test.each([
    [new Date('2023-10-10T10:00:00').getTime(), '10:00'],
    [new Date('2023-10-10T15:30:00').getTime(), '15:30'],
    [new Date('2023-10-10T05:05:00').getTime(), '5:05'],
    [new Date('2023-10-10T00:00:00').getTime(), '0:00'],
  ])('returns "%s" when the timestamp is %s', (timestamp, expected) => {
    const result = formatTimeHHMM(timestamp)
    expect(result).toBe(expected)
  })
})

describe('formatDate', () => {
  test.each([
    [dayjs().format('YYYY-MM-DD'), 'Dzisiaj'],
    [dayjs().add(1, 'day').format('YYYY-MM-DD'), 'Jutro'],
    [dayjs().add(2, 'day').format('YYYY-MM-DD'), 'Pojutrze'],
    ['2029-10-17', 'Środa, 17 października 2029'],
  ])('returns "%s" when the date string is %s', (dateString, expected) => {
    const result = formatDate(dateString)
    expect(result).toBe(expected)
  })
})
