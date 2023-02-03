'use strict'

// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the 
// missing second character of the final pair with an underscore ('_').

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
   let arr = [];

   for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
   }

   if (str && arr.at(-1).length != 2) {
    let last = arr.at(-1);
    console.log(last); 
    arr.pop();
    arr.push(last + '_');
   }
   return arr;
}

console.log(solution('abcdef'));