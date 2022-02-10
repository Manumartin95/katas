import { addAllNumbers } from './add-all-numbers'

describe('AddAllNumbers test', () => {
  it('should return one number if only one number is given', function () {
    const numbers = [0]

    const given = addAllNumbers(numbers)

    expect(given).toEqual(0)
  })

  it('should return the result of the addition of a list of numbers', function () {
    const numbers = [1, 2, 3]

    const given = addAllNumbers(numbers)

    expect(given).toEqual(6)
  })
})
