function restante(arr,n){
	//enquanto o n for maior que 0 diminuir um valor da array.
	while(n>0){
		arr.shift();
		n--;

	}

	//retornar a array pós modificaões
	return arr;
}

console.log(restante([1,2,3,4,5,6],2));