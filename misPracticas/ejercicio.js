/**7 kyu
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */
function isograms(str){
    const word = str.toLowerCase();

    for(let i = 0 ; i < word.length - 1  ; i++){
        for(let j = i + 1 ; j < word.length ; j++){
           if(word[i] === word[j]){
             return false;           
           }
        }
    }
    return true;    
 }

 /*function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //z.
  function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
  }*/

 /// Given an array of integers, find the one that appears an odd number of times.
///There will always be only one integer that appears an odd number of times.
function findOdd(A){
  let copia = A;
  let cont = 0;

   for(let i = 0 ; i < A.length ; i++){    
     if(typeof copia[i] === 'number'){
      cont = 1;

     for(let j = i + 1 ; j < A.length ; j++){
        if(copia[i] === copia[j]){
          copia[j]= 'a';
          cont ++;  
          console.log(cont);
        }  
      }//2do for
      
      if(cont%2 ==! 0) return copia[i];    
     } 
   }///1er for
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


////
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

/////

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

////
function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

////
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}
///
function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}

////////////
function findOdd(A) {
  //happy coding!
  var x = 0;
  for (var i = 0; i < A.length; i++) {
    x = x ^ A[i];
  }
  return x;
}

//
function findOdd(A) {

  function uno(number){
    A.filter()

  }
  return A.find((number) => A.filter((n) => number === n).length % 2)
 

}

/////
function findOdd(A) {
  A.sort();
  if(A[0] !== A[1]) return A[0]
  else{
    A.splice(0,2)
  }
  return findOdd(A)
}