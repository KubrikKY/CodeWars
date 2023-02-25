'use strict';

// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let result = Object.fromEntries(new Set(string).entries());
  for (let key in result) {
    result[key] = 0;
  }
  string.split('').forEach((e) => (result[e] = ++result[e]));
  return result;
}
