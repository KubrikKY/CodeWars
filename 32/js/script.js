// DESCRIPTION:
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  let minor = minorWords ? minorWords.toLowerCase().split(' ') : [];
  let result = title
    ? title
        .toLowerCase()
        .split(' ')
        .map((e) => (minor.includes(e) ? e : e[0].toUpperCase() + e.slice(1)))
        .join(' ')
    : '';
  return result ? result[0].toUpperCase() + result.slice(1) : '';
}
