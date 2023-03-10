// DESCRIPTION:
// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1
// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

function countRepeats(str) {
  return (
    str.length - str.split('').filter((e, i, arr) => e != arr[i + 1]).length
  );
}
