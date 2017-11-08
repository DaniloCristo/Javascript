function filter(array){
	//convertendo os argumentos para uma array
	var args = Array.prototype.slice.call(arguments);
	//criando um loop na array e no argumento
	for(var i = 0; i<array.length;i++){
		for(var j = 0; j<args.length;j++){
			if(array[i] === args[j]){
				//deletando caso os indexs sejam iguais
				delete array[i];
			}
		}
	}
	//filtrando para não trazer os espaços vazios
	return array.filter(Boolean);

}

console.log(filter([1,2,3,4,5],1,2,3));