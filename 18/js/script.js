'use strict';

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends){
    return friends.filter(i => i.length == 4);
}