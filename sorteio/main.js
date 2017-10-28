//criando o evento no clicque do botão
var btn = document.getElementById("btn_click").addEventListener("click",btn_click);

function btn_click(){
	//pegando valores digitados no inputs
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;

	//mudando borda dos inputs caso deixa algum campo em branco
	if(n1 == ""){
		var n1_vazio = document.getElementById("n1");
		n1_vazio.style.border = "1px solid red";
	}else{
		var n1_vazio = document.getElementById("n1");
		n1_vazio.style.border = "1px solid grey";
	}

	if(n2 == ""){
		var n2_vazio = document.getElementById("n2");
		n2_vazio.style.border = "1px solid red"; 
	}else{
		var n2_vazio = document.getElementById("n2");
		n2_vazio.style.border = "1px solid grey";
	}

	n1 = parseInt(n1);
	n2 = parseInt(n2);
	


	
	//criando as variais que vão guardar o menor e o maior valor passado para evitar números negativos

	if(n1>n2){
		var maxValue = n1;
		var minValue = n2;
	}else{
		var maxValue = n2;
		var minValue = n1
	}


	//criando um valor aleatorio de acordo com os passados
	var resultado = Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue  );
	
	//exibindo o resultado no input caso tenha um valor
	 if(!isNaN(resultado)){
		document.getElementById("resultado").value = resultado;
	}
}

