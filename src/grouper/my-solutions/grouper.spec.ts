import { grouper } from './grouper'

describe('Grouper', () => {
  it('should return an object with combination of the ages as keys and the times that have been repeated as the value', function () {
    const given = [
      { name: 'Test', age: 10 },
      { name: 'Test2', age: 10 },
      { name: 'Juan', age: 2 }
    ]

    const actual = grouper(given)

    expect(actual).toEqual({
      10: ['Test', 'Test2'],
      2: ['Juan']
    })
  })
})
