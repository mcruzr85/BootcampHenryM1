/* 01
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
    
   const numArray = array.filter( function(element){
    if (typeof element === 'number')     
          return element;
    });
    return numArray;  
  }
  
  // No modifiques nada debajo de esta linea //
  
  
  module.exports = soloNumeros

  ///////////////////////////////////////////
  /* 02
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodos(array) {
    // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
    // y debe devolver la suma total entre todos los numeros dentro de ese rango
    // ej:
    // sumaTodos([1,3]) => 1 + 2 + 3 = 6
    // Nota: Los numeros estan ordenados de menor a mayor.
    // Tu código aca:
    var a = array[0], b = array[1], newArray = [], resultado = 0;
  
    for(let i = 0; i <= b ; i++){
      if(a <= b){
      newArray[i]=a;
      a++;
      }
    }  
    newArray.forEach(function(num){
      resultado += num;
    });
    return resultado;
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = sumaTodos

  ///////////////////////////////////
  /*  03
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function checkInventario(inventario, item) {
    // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
    // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
    // La funcion debe devolver la cantidad de items que hay.
    // Si el item no existe la funcion tiene que devolver 0 (cero).
    // Ej:
    // var inventario = [
    //   {
    //     nombre: 'tenedor',
    //     cantidad: 6
    //   },
    //   {
    //     nombre: 'cuchara',
    //     cantidad: 4,
    //   },
    // ]
    // checkInventario(inventario, 'tenedor') devuelve => 6
  
    // Tu código aca:
    var cantItem = 0;
    inventario.forEach( function(elementArray){
      if (elementArray.nombre === item)  {
        cantItem = elementArray.cantidad
       }
     });   
     return cantItem;  
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = checkInventario
  ///////////////////////////
  /* 04
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
  
    // Tu código:
   var cadena = num.toString();
   var arrayLetras = [], arrayInverso = [];
   var longitud = cadena.length;
   
   for(var i = 0 ; i < longitud ; i++){
    arrayLetras[i] = cadena[i];
    arrayInverso[(longitud-1) - i] = cadena[i]
    }
    
   for(var i = 0 ; i < longitud ; i++){
    if(arrayLetras[i] !== arrayInverso[i]){
      return false;
     }
    }
      return true;
   }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = numeroSimetrico

  //////////
  /* 05
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function index() {
    // Escribi una función encontraIndex en el prototipo de Arrays,
    // que recibe un elemento.
    // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
    // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
    // Si no existe ese elemento la funcion debe devolver -1
    // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
    // ej:
    // var numeros = [5, 6, 4, 65, 8, 4]
    // numeros.encontraIndex(4) debe devolver 2.
    // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
    // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.
  
    // Tu código aca:
  
   Array.prototype.encontraIndex = function encontraIndex(element){
    var noEsta = -1; 
    for(var i = 0 ; i < this.length ; i++){
      if(this[i] == element)
      return i;
     }
     return noEsta;
    }
  };
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = index

  //////////////////

  /* 06-07-08
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
    // Crear una clase para construir objeto de tipo Persona.
    // el constructor debe recibir:
    // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
    class Persona {
      constructor(nombre, edad, hobbies=[], amigos=[]) {
           this.nombre = nombre;
           this.edad = edad;
           this.hobbies = hobbies;
           this.amigos = amigos;
      }
  
      addFriend(nombre, edad) {
        // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // no debe retornar nada.
       var friend = { nombre: nombre, edad: edad}  ;
       this.amigos.push(friend) ;
      }
  
      addHobby(hobby) {
        // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
        // no debe retornar nada.
        this.hobbies.push(hobby);
      }
  
      getFriends() {
        // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
        var arrayAmigos = this.amigos;
        var arrayNombres = [];
        
          for(var i = 0 ; i<arrayAmigos.length ; i++){
            arrayNombres[i] = arrayAmigos[i].nombre;
          }
          return arrayNombres;
  
      }
  
      getHobbies() {
        // Escribe una función que retorne un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
        return this.hobbies;
  
      }
  
      getPromedioEdad() {
        // Escribe una función que retorne el promedio de edad de los amigos de una persona
        // ej, si la persona tuviera estos amigos:
        // {
        //   amigos: [{
        //     nombre: 'toni',
        //     edad: 33,
        //   }, {
        //     nombre: 'Emi',
        //     edad: 25
        //   }]
        // }
        // persona.getPromedioEdad() // retorna 29
        var arrayAmigos = this.amigos;
        var arrayEdad = [];
        var cant = arrayAmigos.length;
        var suma = 0;
        
          for(var i = 0 ; i<cant ; i++){
            arrayEdad[i] = arrayAmigos[i].edad;
             suma += arrayEdad[i] 
          }
         // var suma2 = arrayEdad.reduce((total,edad)=> total + edad , 0);
          return suma/cant;  //return suma2/cant;
      }
  
    };
  
    return Persona;
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = crearClasePersona

  //////////
  /* 09
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function cuantosRepetidos(array, elemento) {
    // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
    // Cada subarray contiene strings.
    // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
    // Ej:
    // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
    // ya que 'manzana' se repite 2 veces.
    // Nota: Podes usar for loops anidados.
  
    // Tu código aca:
    var contador = 0;
    for(var i = 0 ; i<array.length ; i++){
      for(j=0 ; j<array[i].length ; j++){
        if(array[i][j] === elemento){
          contador +=1; 
        }
      }
    }
    return contador
  }
  
  // No modifiques nada debajo de esta linea //
  
  module.exports = cuantosRepetidos