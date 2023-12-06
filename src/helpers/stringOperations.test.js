import { capitalize } from './stringOperations'

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
