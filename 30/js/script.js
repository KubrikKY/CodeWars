'use strict';

// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  return string
    .split('')
    .map((e) => (e.toUpperCase() == e ? ',' + e : e))
    .join('')
    .split(',')
    .join(' ');
}
