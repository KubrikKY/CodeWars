'use strict'

function perimeter(n) {
  let a = 1
  let b = 1
  let arr = [a, b]
  for (let i = 3; i <= n + 1; i++) {
    let c = a + b
    a = b
    b = c
    arr.push(b)
  }
  if (arr.length == 2) {
    arr.pop()
  }
  return arr.reduce((a, b) => a + b, 0) * 4
}

console.log(perimeter(0))
