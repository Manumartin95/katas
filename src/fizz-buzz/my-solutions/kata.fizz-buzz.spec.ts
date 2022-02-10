import { fizzBuzz } from './kata.fizz-buzz'

describe('fizz-buzz', () => {
  it('should return a list of numbers starting at 1 and ending at the given number', () => {
    const given = 2

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2])
  })

  it('should replace multiple of 3 with fizz', () => {
    const given = 3

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should replace multiple of 5 with buzz', () => {
    const given = 5

    const actual = fizzBuzz(given)

    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace both with fizz and buzz when necessary', () => {
    const given = 15

    const actual = fizzBuzz(given)

    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
