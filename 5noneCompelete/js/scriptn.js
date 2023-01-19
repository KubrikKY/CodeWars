// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    if (s.length == 1) {
        return s;
    }
    let result = [],
        toUpper = s.toUpperCase();
    console.log(toUpper);

    
    for (let i = 0; i < s.length - 1; i++) {
        let j = i;
        if (!toUpper.includes(toUpper[i], j + 1)) {
            console.log(s[i]);
            result.push(s[i]);
        }
    }

    return (result.length != s.length) ? result[0]: '';
  }



console.log(firstNonRepeatingLetter('sssssssss'));


// function firstNonRepeatingLetter(s) {
//     let arr = s.toUpperCase()
//             .split('')
//             .filter((letter, index, arr) => !arr.includes(letter, index + 1))[0];
//     console.log(arr);
//     return s[s.indexOf(arr[0])];
   
//     // return s.toUpperCase()
//     //         .split('')
//     //         .filter((letter, index, arr) => !arr.includes(letter, index + 1))[0] ? ;
//   }
