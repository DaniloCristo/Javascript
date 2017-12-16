function Diff(arr1,arr2){	
	//pegando o length da array de maior comprimento e armazenando em l
	let l = arr1.length >= arr2.length ? arr1.length : arr2.length;

	//criando a array que vai receber a diferença
	let temp = [];
	//console.log(l);

	//percorrendo as arrays
	for(let i = 0; i<l;i++) {
		
		//verificando se um determinado elemento da segunda array esta contido na primeira
		if(arr1.indexOf(arr2[i]) === -1){
			//caso não esteja coloque-o na array da diferença
			temp.push(arr2[i]);	

				
		}

		//verificando se um determinado elemento da primeira array esta contido na segunda
		if(arr2.indexOf(arr1[i]) === -1){
			//caso não esteja coloque-o na array da diferença
			temp.push(arr1[i]);
		}
	}	

		//usando arrow functions para retirar valores nulos. (quando estiver desigualdade no comprimento das array isso pode vim a acontecer)
		let newtemp = temp.filter(num=>num!= null);
		
		// retornando a nova array que contem a diferença entre as duas arrays passadas
		return newtemp;
	}


console.log(Diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));