

// С ЭТИМ НАДО РАЗОБРАТЬСЯ!!!!!!!!!!!!!!!


function isIsogram(str){
    
    let repeat = 0;


    str.toLowerCase()
    .split('')
    .map( function (a, i, w) {

           if (w.indexOf(a) != w.lastIndexOf(a)) {
             return repeat++;
          }
        });

        if (repeat > 0) {
            return false;
        }
        return true;

  }

console.log(isIsogram('фывап'));



// ПРИМЕРЫ ДРУГИХ
// __________________________________________
// __________________________________________


function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }


  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }


  function isIsogram(str)  {
    // Downcase everything, split on letters.
    str_lc = str.toLowerCase();
    var letters = str_lc.split('');
    
    // Utility: checks whether the given "value" at "index" is actually
    // first encountered at this "index" position within a string ("self").
    // Expected to be used with Array#filter.
    var check4uniqueness = function(value, index, self) { 
      return self.indexOf(value) === index;
    }
    
    // An isogram string contains no duplicate, hence must have the same
    // length than the array composed of unique letters from that string.
    return letters.filter(check4uniqueness).length == str.length;
  }


  function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
  }