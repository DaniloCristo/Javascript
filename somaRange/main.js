function somarAll(array){
	//usando o metodo Math para pegar o menor e o maior valor dos indices do array
	let max = Math.max(array[0],array[1]);
	let min = Math.min(array[0],array[1]);

	//criando uma nova array que ja vai conter 2 numeros (o menor valor do array recebido e o maior)
	let arr = [min,max];
	for(let i = min + 1; i < max; i++){
		//preenchendo o array com os valores que faltam entre o menor e o maior valor
		array.push(i);
		//somando todos os valores dentro
		let sum = array.reduce((n1,n2)=>n1+n2);
	}
		//retornando a soma
		console.log(sum);
}

somarAll([10,5]);