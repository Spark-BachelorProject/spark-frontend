import { capitalize } from './stringOperations'
import { getInitials } from './stringOperations'

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const input = 'hello world'
    const expectedOutput = 'Hello world'
    const result = capitalize(input)
    expect(result).toBe(expectedOutput)
  })

  it('should return an empty string if input is empty', () => {
    const input = ''
    const expectedOutput = ''
    const result = capitalize(input)
    expect(result).toBe(expectedOutput)
  })
})

describe('getInitials', () => {
  it('should return the first letters of the input strings', () => {
    expect(getInitials('John', 'Doe')).toBe('JD')
    expect(getInitials('Foo', 'Bar')).toBe('FB')
  })

  it('should return TP for empty or undefined input', () => {
    expect(getInitials()).toBe('TP')
    expect(getInitials(undefined, undefined)).toBe('TP')
  })

  it('should handle strings with one character', () => {
    expect(getInitials('A', 'B')).toBe('AB')
  })

  it('should handle empty strings', () => {
    expect(getInitials('', '')).toBe('TP')
  })
})
