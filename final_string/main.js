function confirmEnding(str,target){
	//tamanho de caracteres da string passada
	let tamanhoStr = str.length;
	//console.log(tamanhoStr)
	//tamanho em caracteres do target passado
	let tamanhoTarget = target.length;
	//console.log(tamanhoTarget);
	//aqui eu decidi o valor que vai começar no subtring
	let sub = tamanhoStr - tamanhoTarget;
	//console.log(sub)
	//pegando os vlores atraves do start do valor da variavel sub
	let equal = str.substring(sub);
	//console.log(equal);
	//conferindo se o valor retornado do start na variavel sub é igual ao target passado.
	let resultado = equal == target ? true : false;
	//retornando o resultado
	return resultado;


}

console.log(confirmEnding("He has to give me a new name", "name"));