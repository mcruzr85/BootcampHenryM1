'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var arreglo = [];
var long = num.length;
var numero = 0;

for (var i=0 , j= long; i < long ; i++, j--){
  arreglo[j-1] = num[i];
}

for(var i = 0; i < long ; i++ ){
   if(arreglo[i] === '1'){
      numero += Math.pow(2, i)
   }
}
  return numero;
}

function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  var reverse = [];
  var i =0;

 while (num >=1) {
    array[i]= num%2;
    num = Math.floor(num/2); 
    i++;
 }

 for(var k=array.length-1, j=0 ; k >= 0  ; k--, j++){
      reverse[j] = array[k];
  }
  return reverse.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}