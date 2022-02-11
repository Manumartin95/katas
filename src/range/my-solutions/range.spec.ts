import { range } from './range'

describe('Range', () => {
  it('should return a list of numbers starting from zero to the given number', function () {
    const endNumber = 5

    const actual = range(endNumber)

    expect(actual).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should return a list of numbers starting from the first given parameter and ending in the second one', function () {
    const initialNumber = 1
    const endNumber = 5

    const actual = range(initialNumber)

    expect(actual).toEqual([1, 2, 3, 4, 5])
  })
})
