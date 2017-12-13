function somarAll(array){
	let max = Math.max(array[0],array[1]);
	let min = Math.min(array[0],array[1]);

	let arr = [min,max];
	for(let i = min + 1; i < max; i++){
		array.push(i);
		let sum = array.reduce((n1,n2)=>n1+n2);
		console.log(sum);
	}
}

somarAll([10,5]);