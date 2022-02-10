type fruitResult = Record<string, number>

export function fruitCounter(given: string[]) {
  let result: fruitResult = {}
  given.forEach((fruit: string) => {
    if (result[fruit] === undefined) {
      result[fruit] = 1
    } else {
      result[fruit]++
    }
  })

  return result
}
