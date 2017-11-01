function repeat(str,num){
	//variavel que vai receber a string quantas vezes for pedida
	var result = "";
	//loop que vai verificar quantas vezes a string vai ser repetida
	for(var i = 0; i<num; i++){
		 result += str;
	
	}
	return result;
}

console.log(repeat("abc ",5));