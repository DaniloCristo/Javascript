
function findLongestWord(str) {
  var array = str.split(" ");
  var bigger = 0;
  for(var i = 0; i<array.length; i++){
    if(array[i].length>bigger){
      bigger = array[i].length;
    }
  }
  return bigger;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
