'use strict'

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    return arr.filter(e => {
        return e != (arr.filter((e, i, arr) => e == arr[i + 1])[0]);
    })[0];
}

function findUniq(arr) {
    let a = arr.sort();
    return a[0] == a[1] ? a.at(-1) : a[0];
}

console.log(findUniq([ 3, 10, 3, 3, 3 ]));