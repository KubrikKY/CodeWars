'use strict';

// Your task is to write a function that takes a string and return a new string with all vowels removed.
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript


function disemvowel(str) {
    let subStr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(letter => {
        let value = true;
        for (let i of subStr) {
            if (i == letter) {
                value = false;
                return;
            }
        }
        return value;
    }).join('');
  }

  console.log(disemvowel("This website is for losers LOL!"));


