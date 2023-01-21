'use strict';

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    let set = new Set(A),
    result;
     for (let numb of set) {
        let count = 0;
        for (let num of A) {
            if (num == numb) {
                count++;
            }
        }
        if (count % 2 != 0) {
            result = numb;
        }
     }
    return result;
  }

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));