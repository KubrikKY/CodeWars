'use strict';

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

function zeros (n) {
   let zero = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
        zero += Math.floor(n / i); 
    }
    return zero; 
}

console.log(zeros(19));