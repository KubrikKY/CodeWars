'use strict';

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
    let date = new Date (),
    setDate = new Date (date.getFullYear(), date.getMonth(), date.getDate(), h, m, s),
    today = new Date (date.getFullYear(), date.getMonth(), date.getDate());
    return setDate - today;
}


console.log(past(0, 1, 1));