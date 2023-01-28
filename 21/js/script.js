'use strict'

// In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    return +(String(num).split('').map(i => i**2).join(''));
}

console.log(squareDigits(9119));