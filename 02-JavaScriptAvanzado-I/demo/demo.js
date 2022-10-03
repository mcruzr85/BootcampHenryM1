//funcion que coloca mayusculas en la primera letra de cada palabra

/*String.prototype.toJadenCase = function() {
  
  let b ='';
  let long = this.length;
  let strFinal = '';
  let arr = this.split('');
  

  arr[0] = arr[0].toUpperCase();

  for(let i = 1; i < long ; i++){
    if(arr[i] === ' '){
      b = arr[i + 1]
      arr[i + 1] = b.toUpperCase(); 
      
    }
  }
  
  strFinal = arr.join('');
  return strFinal;
};

var a = 'hola como estas';
//a.toJadenCase();
console.log(a.toJadenCase());



function uniqueInOrder(iterable){
  //your code here - remember iterable can be a string or an array
  
  let long = iterable.length;
  let finalArray = [];
  finalArray[0] = iterable[0];
  
 
  for(let i = 0 ; i < long - 1 ; i++){
    if (!(iterable[i] === iterable[i+1])){
        finalArray.push(iterable[i+1]);
      }      
    }
  return finalArray;
  }
  
var a = uniqueInOrder('AbAAbbBBnN');
console.log(a);

*/
var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

console.log(getNombreInstructor);




/*function todos(fn) {
 // Array.prototype.todos = function(cb){

// }
/**Importante: 
No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
código dentro de las funciones ya definidas. 
No comentar la funcion 
*/

// Escribi una función llamda todos en el prototipo de Arrays,
// que recibe una funcion (callback). Asumir que fn devuelve siempre true o false.
// La función todos debe devolver true si fn devuelve true cuando la invocamos pasandole de a uno todos los elemento del array
// la funcion todos debe devolver false, si algún elemento del array hace que fn devuelva false;
// por ejemplo:
// [1,2,3].todos(function(elem) {
//    return elem < 10;
//  });
// devuelve true
// [1,2,3].todos(function(elem) {
//    return elem < 2;
//  });
// devuelve false.


//No pude hacer que el parametro "fn" pasarlo como callback para que me defina la nueva propiedad para los Array.



//}
﻿





