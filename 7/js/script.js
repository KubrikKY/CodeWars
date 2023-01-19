'use strict';

// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

function trim(str, size) {
    if (str.length < 4 && str.length > size) {
        return str.slice(0, size) + '...';
    }
    return str.length <= size ? str: str.slice(0, size - 3) + '...';
}

console.log(trim("Creating kata is fun", 14));