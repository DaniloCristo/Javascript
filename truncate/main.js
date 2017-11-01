function truncate(str,num){
	//verificando se o tamanho da string é maior que o valor passado	
	if(str.length>num && num>3){
		//retornando a quantidade caracteres do num concatenado com '...'
		return str.slice(0,(num -3 )) + "..."; 
	}else if(str.length>num && num<3){
		return str.slice(0,num) + "...";
	}else {
		return str;
	}
}

console.log(truncate("Danilo",2));