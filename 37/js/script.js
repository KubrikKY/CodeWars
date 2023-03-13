// DESCRIPTION:
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  let letter = str
    .split(' ')
    .map((e) =>
      e
        .split('')
        .filter((i) => isNaN(+i))
        .join('')
    )
    .map((a) =>
      a.length > 1 ? a[a.length - 1] + a.slice(1, a.length - 1) + a[0] : a
    );
  let num = str.split(' ').map((e) =>
    e
      .split('')
      .filter((i) => isFinite(i))
      .join('')
  );
  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(`${String.fromCharCode(num[i])}${letter[i]}`);
  }

  return result.join(' ');
}
