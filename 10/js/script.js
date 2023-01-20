'use strict';

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    for (let num of pin) {
        if (!isFinite(num) || num == ' ') {
            return false;
        }
    }
    return pin.length == 6 || pin.length == 4 ? true: false;
}


console.log(validatePIN('123 '));
