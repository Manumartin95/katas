export function Flat(...given: any) {
  given.reduce((acc: any, act: any) => [...acc, ...act], [])
}
