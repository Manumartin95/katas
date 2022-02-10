import { fruitCounter } from './fruit.counter'

describe('Fruit counter', () => {
  it('should return an object with the number of fruits', function () {
    const given = ['🍋', '🍉', '🍒']

    const actual = fruitCounter(given)

    expect(actual).toEqual({ '🍋': 1, '🍉': 1, '🍒': 1 })
  })
  it('should return an object with the total number of fruits', function () {
    const given = ['🍋', '🍉', '🍒', '🍒']

    const actual = fruitCounter(given)

    expect(actual).toEqual({ '🍋': 1, '🍉': 1, '🍒': 2 })
  })
  it('should return an object with the total number of fruits', function () {
    const given = ['🍋', '🍉', '🍉', '🍒', '🍒', '🍒']

    const actual = fruitCounter(given)

    expect(actual).toEqual({ '🍋': 1, '🍉': 2, '🍒': 3 })
  })
})
