function pares(array){

	//função callback que filtra os valores retornando a array apenas com valores pares
	let pares = array.filter(val => val % 2 == 0);
	
	return pares;
}
console.log(pares([4,8,7,9,2,22]));