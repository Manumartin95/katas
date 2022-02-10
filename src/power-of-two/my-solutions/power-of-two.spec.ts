import { powerOfTwo } from './power-of-two'

describe('PowerOfTwo Test', () => {
  it('should return a number if is passed', function () {
    const numbers = [0]

    const given = powerOfTwo(numbers)

    expect(given).toEqual([0])
  })

  it('should return array of powered numbers if is passed', function () {
    const numbers = [1, 2, 3]

    const given = powerOfTwo(numbers)

    expect(given).toEqual([1, 4, 9])
  })
})
