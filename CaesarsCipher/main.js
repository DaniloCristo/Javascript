function rot13(string){
	//arrayay que vai receber os valores decodificados
	let array = [];
	//loop na string para pegar o valor ascii de cada caractere
	for(let i = 0; i<string.length;i++){
		//pegando o valor ascii usando o i que esta percorrendo toda a string
		let char = string.charCodeAt(i);
		//como so vou trabalhar com o A-Z caso não esteja entre isso, não farei nada
		if(char<65 || char > 90){
			
			array.push(string[i]);
		}else if(char<78){
			//como estou usando chave 13 da cifra de cesar, o char seja menor que 78 somar + 13 
			
			array.push(String.fromCharCode(char + 13));
		}else{
			//caso seja maior que 78 diminuir 13 assim o A se torna N e o N se torna A
			
			array.push(String.fromCharCode(char - 13));
		}
	}
	//retorna a Array em forma de string
	return array.join("");
	
}
//output - FREE CODE CAMP
console.log(rot13("SERR PBQR PNZC"));
