function reverseString(str) {
  var array = str.split("");
  var reverso = array.reverse();
  var juntar = reverso.join("");
  return juntar;
}

console.log(reverseString("hello"));