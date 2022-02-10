import { alphaBetical } from './alphaBetical'

describe('Alphabetical', () => {
  it('should return a string if string is given', function () {
    const given = ['A']

    const actual = alphaBetical(given)

    expect(actual).toEqual(['A'])
  })
  it('should return list of string sorted alphabetically', function () {
    const given = ['C', 'B', 'A', 'Z', 'D']

    const actual = alphaBetical(given)

    expect(actual).toEqual(['A', 'B', 'C', 'D', 'Z'])
  })
})
