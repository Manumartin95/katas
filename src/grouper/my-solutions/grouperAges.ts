type People = { name: string; age: number }
type Result = Record<number, number>

export function grouperAges(given: People[]) {
  let result: Result = {}
  given.forEach(person => {
    if (result[person.age] === undefined) {
      result[person.age] = 1
    } else {
      result[person.age]++
    }
  })
  return result
}
