// Task
// In the example above you can see that extends function returns T & U which should correspond to intersection of types T and U. But in fact it returns object containing all properties from T mixed with additional properties from U.

// Your task is to create function intersect which returns object with properties that are present simultaneously in T and U.

// https://www.codewars.com/kata/5916c87540ef95d8e1000007

export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  let result = <T & U>{};
  for (let id in first) {
    if (id in second) {
      result[id] = first[id] as any;
    }
  }
  return result;
}
