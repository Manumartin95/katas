export function FizzBuzz(value: number) {
  const convertedList = []

  for (let i = 1; i < value; i++) {
    if (i % 3 === 0) {
      convertedList.push('fizz')
    } else {
      convertedList.push(i + 1)
    }
  }

  return convertedList
}
