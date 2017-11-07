function mutation(array){


	//armazenando os valores da array minusculo dentro de strings
	var string1 = array[0].toLowerCase();
	var string2 = array[1].toLowerCase();
	//percorrendo a segunda array
	for(var i = 0; i<string2.length; i++){
		//usando a função indexOf() que vai retornar -1 caso algum caractere da string2 não esteja contida na string1
		if(string1.indexOf(string2[i])===-1){
			//retornar false caso não encontre
			return false;
		}
	}
	//retornar true caso tudo esteja certo	
	return true;
}

console.log(mutation(["Danilo", "Dan"]));