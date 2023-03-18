// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  if (!str.trim().length) {
    return false;
  }
  let strWithHash = str
    .split(' ')
    .map((e, i) => {
      if (e.length > 0) {
        return i == 0
          ? `#${e[0].toUpperCase()}${e.slice(1)}`
          : `${e[0].toUpperCase()}${e.slice(1)}`;
      }
    })
    .join('');
  return strWithHash.length > 140 ? false : strWithHash;
}
