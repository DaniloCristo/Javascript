
function palindrome(str) {
  // Good luck!
  //convertendo a string passada para lower case
  var lower = str.toLowerCase();
  
  //retirando os valores não alpha numericos
  var result = lower.replace(/[^0-9a-zA-Z]/g,"");
  //return result;
  //console.log(result);
  //invertendo a string
  var invertido = result.split("").reverse().join("");
  //return invertido;
  //verfiicando se é um palindromo
  var palindromo = invertido == result ? true : false;
  return palindromo;
}





console.log(palindrome("A man, a plan, a canal. Panama"));
