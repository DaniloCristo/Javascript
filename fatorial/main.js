function factorialize(n) {
  if(n==0){
    return 1;
  }
  var fator = n;
  while(n-- >2){
    fator = fator * n;
  }
  return fator;
}

console.log(factorialize(5));