function titleCase(str){
	//pegando a string deixando ela minuscula e separando cada palavra em um indice de uma array.
	var array = str.toLowerCase().split(" ");
	//loop que vai percorrer cada indice da array
	for(var i = 0; i<array.length;i++){
		//deixando a primeira letra da palavra maiuscula
		array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);

		//caso seja conectivo retorne minusculo
		if(array[i] == "And" || array[i] == "The" || array[i] == "Of"){
			array[i] = array[i].toLowerCase();
		}
	}
	//juntando a array e retornando uma string
	return array.join(" ");
}

console.log(titleCase("Danilo is incredible and beautiful"));