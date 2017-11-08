function filter(array){
	//retornando os valores filtrados
	//utilizando a sintaxe do ES6
	return novaArray = array.filter(val => Boolean(val));
}

console.log(filter([1,2,"",false]));