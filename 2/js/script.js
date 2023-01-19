
function duplicateEncode (word) {
    word = word.toUpperCase();
    let value = word.length;
    let a = 0;
    let letters = [];
    
    for (let i = 0; i < value; i++) {
        letters[i] = (word.slice(a, ++a));
    }
    
    let lnth = letters.length;
    let bracket = [];


    letters.forEach((e, i) => {

        console.log(e);
        for (let a = 0; a < lnth; a++) {
            if (e == letters[a] && i != a) {
                console.log('yes');
                bracket[i] = ')';
                continue;
            } 
        }

        if (bracket[i] != ')') {
            bracket[i] = '(';
        }
        
    });

    return bracket.join('');

}

console.log(duplicateEncode('(( @'));





// РЕЗУЛЬТАТЫ ДРУГИХ 

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

// ________________________________________

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }