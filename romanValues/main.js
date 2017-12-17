function roman(num) {
	//valores decimais
	let decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	//correspondentes em romano
	let romanValues = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

	//valor que vai ser retornado
	let formaRomana = "";
 	
 	//percorrendo o array decimal
	for(let i = 0; i<decimal.length; i++){

		//enquanto o numero for maior que o decimal
		while(decimal[i] <= num) {
			formaRomana += romanValues[i];
			num -= decimal[i];
		}
	}

	//retornar a forma romana
	return formaRomana;
}

console.log(roman(50));