function binary(array, target)
{
	//variaveis iniciais
	let min = 0;
	let max = array.length - 1;
	let chute;
	while(max>=min)
	{
		//gerando um chute inteiro entre a media de min e max
		chute = Math.floor((min+max)/2);
		//verficia se o valor encontrado no index chute corresponde ao target
		if(array[chute]==target)
		{
			//retorna acertou caso seja verdade
			return "Encontrado";
		}
		//verificar se o chute foi maior que o target
		else if(array[chute]>target)
		{
			//reduz max para fazer uma busca nos valores menores do que o chute anterior
			max = chute - 1;
		}
		//caso o chute tenha sido menor que o target
		else
		{
			//aumenta min para fazer uma busca apenas entre os valores superior ao chute anterior
			min = chute + 1;
		}

	}
	//caso max fique menor que min, significa que o valor target nao foi encontrado, logo retorne -1
	return -1;
	
}

console.log(binary([1,2,3,4,5,6,7,8],4));