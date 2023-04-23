"use strict";
// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneNumber = void 0;
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
// https://www.codewars.com/kata/525f50e3b73515a6db000b83
function createPhoneNumber(numbers) {
    return numbers.reduce((a, e, i) => {
        switch (i) {
            case 0:
                a += `(${e}`;
                return a;
            case 2:
                a += `${e}) `;
                return a;
            case 5:
                a += `${e}-`;
                return a;
            default:
                a += String(e);
                return a;
        }
    }, '');
}
exports.createPhoneNumber = createPhoneNumber;
