function ordem(array,num){
	//ordenando a array em ordem crescente
	var ordem = array.sort((a,b)=>a>b);
	//retornando o index em que o argumento passado se encaixaria
	var index = ordem.findIndex(val=>val>=num);
	if(index === -1){
		return ordem.length;
	}
	return index;

}

console.log(ordem([5, 3, 20, 3], 5));