import { FilterEvenNumbers } from './filter-even.numbers'

describe('FilterEvenNumbers', () => {
  it('should return one number if is even', function () {
    const given = [0]

    const actual = FilterEvenNumbers(given)

    expect(actual).toEqual([0])
  })
  it('should return array of even numbers', function () {
    const given = [1, 2, 3, 4, 5, 6, 7]

    const actual = FilterEvenNumbers(given)

    expect(actual).toEqual([2, 4, 6])
  })
})
