function factorialize(n) {
  //caso o numero passado seja zero retorne um de fatorial
  if(n==0){
    return 1;
  }
  //define fator com o valor passado
  var fator = n;
  //cria a interação decrementando sempre -1 até que n nao seja maior que 2
  while(n-- >2){
  	// sobrescrevendo o fator com a multiplicação do valor nele contido com o novo valor de n
    fator = fator * n;
  }
  //retornando o fator
  return fator;
}

console.log(factorialize(5));