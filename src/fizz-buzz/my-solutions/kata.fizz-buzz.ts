export function fizzBuzz(value: number) {
  const result = []
  for (let i = 1; i <= value; i++) {
    const isMultipleOfThree = i % 3 === 0
    const isMultipleOfFive = i % 5 === 0
    let text = ''

    if (isMultipleOfThree) {
      text += 'fizz'
    }

    if (isMultipleOfFive) {
      text += 'buzz'
    }

    result.push(text === '' ? i : text)
  }
  return result
}
