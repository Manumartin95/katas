interface Person {
  name: string
  age: number
}
type Result = Record<number, string[]>

export function grouper(given: Person[]) {
  let result: Result = {}
  given.forEach(person => {
    result[person.age] === undefined
      ? (result[person.age] = [person.name])
      : result[person.age].push(person.name)
  })
  return result
}
