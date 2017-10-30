
function palindrome(str) {
  // Good luck!
  var lower = str.toLowerCase();
  
  
  var result = lower.replace(/[^0-9a-zA-Z]/g,"");
  //return result;
  //console.log(result);
  var invertido = result.split("").reverse().join("");
  //return invertido;
  var palidromo = invertido == result ? true : false;
  return palidromo;
}





console.log(palindrome("A man, a plan, a canal. Panama"));
