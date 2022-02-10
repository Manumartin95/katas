import { Flat } from './flat'

describe('Flat', () => {
  it('should return array of numbers if given', function () {
    const given = [1, 2, 3]

    const actual = Flat(given)

    expect(actual).toEqual([1, 2, 3])
  })
  it('should return a combination of all given arrays', function () {
    const given = [
      [1, 2, 3],
      [4, 5, 6]
    ]

    const actual = Flat(given)

    expect(actual).toEqual([1, 2, 3, 4, 5, 6])
  })
})
