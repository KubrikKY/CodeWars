'use strict'

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    let count = 0;
        arr.forEach(e => {
            if (e[0] == ':' || e[0] == ';') {
                if (e[1] == ')' || e[1] == 'D') {
                    count++;
                }
                if (e[1] == '-' || e[1] == '~') {
                    if (e[2] == ')' || e[2] == 'D') {
                        count++;
                    }
                }
            }
        });
    return count;
}


console.log(countSmileys([':)', ';(', ';}', ':-D']));