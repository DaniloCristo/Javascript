
function findLongestWord(str) {
 //transformando a string passada em um array com cada frase
  var array = str.split(" ");
  //varialvel bigger
  var bigger = 0;
  //loop que vai verficar o tamanho de cada index da array
  for(var i = 0; i<array.length; i++){
    if(array[i].length>bigger){
    	//atribuindo a bigger o tramanho da array caso seja maior que o valor de bigger
      bigger = array[i].length;
    }
  }
  //retornando bigger
  return bigger;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
