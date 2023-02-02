'use strict'

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str){
    let b = ' ';
    if (str.includes('-')) {
        b = '-';
    }
    if (str.includes('_')) {
        b = '_';
    }
    let camelCase = str.split(b)
        .map((e, i) => i == 0 ? e : e[0].toUpperCase() + e.slice(1))
        .join('');
    console.log(camelCase);
    if (camelCase.includes('-')) {
        return toCamelCase(camelCase);
    }
    return camelCase;
}

console.log(toCamelCase('A-cat_was-Savage'));

function digitalRoot(n) {
     return String(n).length == 1 ? n : digitalRoot(String(n).split("")
     .reduce((a, e) => +e + a, 0));
}

  console.log(digitalRoot(456));