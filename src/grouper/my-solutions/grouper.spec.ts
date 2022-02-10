import { grouperAges } from './grouperAges'

describe('Grouper', () => {
  it('should return an object with the age and the times that have been repeated', function () {
    const given = [{ name: 'Test', age: 10 }]

    const actual = grouperAges(given)

    expect(actual).toEqual({ 10: 1 })
  })

  it('should return an object with combination of the the ages  and the thimes that have been repeated', function () {
    const given = [
      { name: 'Test', age: 10 },
      { name: 'Test2', age: 10 },
      { name: 'Juan', age: 2 }
    ]

    const actual = grouperAges(given)

    expect(actual).toEqual({ 10: 2, 2: 1 })
  })
})
