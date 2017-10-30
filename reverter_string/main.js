function reverseString(str) {
	//transformando a string passada em uma array com cada letra	
  var array = str.split("");
  //revertendo a ordem do array
  var reverso = array.reverse();
  //juntando o array ja invertido
  var juntar = reverso.join("");
  return juntar;
}

console.log(reverseString("hello"));