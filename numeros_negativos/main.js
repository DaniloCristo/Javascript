function totNegativos(array){
	//variavel que vai armazenar os valores negativos
	let negativos = 0;

	//loop que percorre a array
	for(let i = 0; i<array.length; i++){
		//inscrementa + 1 na variavel sempre que achar um valor menor que 0
		if(array[i] < 0 ){
			negativos++;
		}
	}

	//se todos os valores forem negativos 
	if(negativos == array.length){
			return "Todos os numeros são negativos";
	}

	return negativos;
}

console.log(totNegativos([-1,2,-3,-4,-6,-7]));