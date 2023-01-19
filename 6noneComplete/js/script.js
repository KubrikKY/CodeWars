'use strict';

// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
function add(n){
    let sum;
    function f (b) {
        sum = n + b;
        console.log(sum);
        return f;
    }
    f.toString = function() {
        return sum;
    };
    return f;
}

console.log(String(add(1)(2)(3)(4)(5))); //6


// function add(x){
//     let sum = x;
//     return function resultFn(y){
//         if(arguments.length){ //not relying on falsy value
//             sum += y;
//             return resultFn;
//         }
//         return sum;
//     };
// }

// console.log(add(1)(2)(3)(4)(5)); //6
