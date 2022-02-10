import { FizzBuzz } from './fizz-buzz'

describe('FizzBuzz test', () => {
  it('should return 1 if a number lower than 1 is given', function () {
    const number = 0

    const fizzBuzz = FizzBuzz(number)

    expect(fizzBuzz).toEqual([1])
  })
  it('should return a list of numbers starting from 1 until given number is reached', function () {
    const number = 2

    const fizzBuzz = FizzBuzz(number)

    expect(fizzBuzz).toEqual([1, 2])
  })
  it('should return fizz if given number is multiple of fizz', function () {
    const number = 3

    const fizzBuzz = FizzBuzz(number)

    expect(fizzBuzz).toEqual([1, 2, 'fizz'])
  })
})
