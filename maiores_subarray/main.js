function largest(arr){
	//array que vai guardar os maiores valores de cada sub array
	var newArray = new Array();
	//loop que percorre as subarray
	for(var i = 0; i<arr.length;i++){
	//valor que vai ser resetado sempre que trocar de sub array	
	var n = 0;
		//loop que percorre os indices da sub array
		for(var j = 0; j<arr[i].length; j++){
			//retornar o maior valor da subarray na variavel N
			if(arr[i][j]>n){
				 n = arr[i][j];		   	
			}// fim do if
		}// fim do segundo for
			// armazenar o valor de n na new Array
			newArray[i] = n;
			//console.log(n)
		
	}// fim do primeiro for
	
	console.log(newArray);
	
}// fim da função



largest([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);