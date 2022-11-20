'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arrPrimos = [];
  let arrFact = [];
  let arrOrden = [];
  if(num === 1 ) return arrOrden = [1]; 

  for(let i=num ; i > 0 ; i--){       
    let cont = 0;
    for(let j=num ; j > 0 ; j--){    
      (i%j === 0 ) && cont++;               
      } 
     (cont <= 2) && arrPrimos.push(i); //aqui tengo todos los primos menores o iguales que el numero     
  }

  for(let i = 0 ; i < arrPrimos.length ; i++){     
    if(num%arrPrimos[i] === 0 && num >1){
        arrFact.push(arrPrimos[i]);
        num =num/arrPrimos[i] ;
        i = i - 1;
        if(num === 1) arrFact.push(num);
     }  
    }
    arrOrden = arrFact.reverse();
    return arrOrden;
  };



  /**  // Tu código: CODIGO DE AURI
  /*
  1. debemos guardar nuestros factores en un arreglo, el arreglo debería iniciar en 1
  2. Iniciar una variable en 2 --> divisor
  3. Necesitamos descomponer nuestro número recibido por parámetro
  4. cómo lo hacemos? while...
  5. caso base o caso de corte --> num > 1 o num !== 1
  6. Qué hacemos dentro del while?
    - nuestra división sea exacta
    - si es exacta, pusheamos divisores
    - dividimos nuestro número por el divisor.
    - si no es exacta --> divisor++
  
  let factores = [1];
  let divisor = 2; //3--> 4  --> 5
  while (num > 1) {
    //180 --> 90 -->45 -->15 --> 5
    if (num % divisor === 0) {
      //180/2-->0? --- 90/2-->0? --45/2-->0? -- 45/3-->0? -->15/3 = 0 --- 15/3-->0?
      factores.push(divisor); //factores = [1,2,2,3,3,5]
      num /= divisor; //90 --> 45 --> 15 --> 5 --> 1
      //num = num / divisor
    } else {
      divisor++; //2 + 1 = 3 --> 3 + 1 = 4 --> 4 + 1 = 5
    }
  }
  return factores; //[1,2,2,3,3,5]
}
//O(nlogn)
// console.log(factorear(180)) */

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0 ; i< array.length ; i++){
    for(let j = 0 ; j < array.length -1-i; j++){
      if(array[j] >= array[j + 1]){
        [ array[j], array[j+1] ] = [ array[j+1] , array[j] ]; 
       }
    }    
  }
 return array;
};


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i<array.length; i++){
    let j = i-1;
    let aux = array[i];
    while(j>= 0 && array[j] > aux){
      array[j+1] = array[j];
      j--
    }
    array[j+1] = aux;    
  }
  return array
};


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux;
  let pos=0;

  for(let i = 0 ; i < array.length - 1 ; i++){
    aux = array[i];     
    for(let j = i+1 ; j < array.length ; j++){

      if(array[i]> array[j] && aux >array[j]){        
        aux = array[j];
        pos = j;                   
      }
    }   
    if(aux !== array[i]){   
      [ array[i], array[pos] ] = [ array[pos] , array[i] ];  
     } 
  }
  return array;
};


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
