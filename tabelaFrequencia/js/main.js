$(document).ready(function(){
	
	
	function tabelaFrequencia(array) {
		//criando a tabela
		let tabela = "<table class='table table-striped'>";
			
			//criando as colunas da tabela
			tabela += "<thead><tr><th>idade</th><th>Frequência</th></tr></thead>";
			let newArray = []; 
			
			let freq = [];
			//console.log(array)
			
			//povoando uma nova array com os números sem suas repetições, que ficarão na coluna "idade"
			for(let i = 0; i<array.length; i++) {

				if(newArray.indexOf(array[i]) == -1) {
					newArray.push(array[i]);
				}
				
			}

			//povoando a array frequencia com a quantida de vezes que uma idade repete
			for(let i = 0; i<newArray.length; i++) {
				let temp = 0;
				for(let j = 0; j<array.length; j++){
					if(newArray[i] == array[j]){
						temp++;
					}
				}
				freq.push(temp);
			}
			tabela += "<tbody>";
			
			//povoando a tabela com os dados
			for(let i = 0; i<newArray.length;i++) {
				//colocando as idades
				tabela += "<tr><td>"+newArray[i]+"</td><td>"+freq[i]+"</td></tr>";
			}
			

			
		
			tabela += "</tbody>";
			tabela +="</table>";

			//enviando a tabela para o index
			$("#tabela").html(tabela);

			console.log(newArray)
			console.log(freq)



	}

	tabelaFrequencia([5,7,5,9,7,7,6,9,9,9,10,12,12,7]);
})
