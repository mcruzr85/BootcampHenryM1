
//********************* */
x = 1;
var a = 5;
var b = 10;    // x f => 8  //10
var c = function(a, b, c) {
  var x = 10;   
  console.log(x);  //imprime x 10
  console.log(a);   //imprime a x arg 8
  
  var f = function(a, b, c) {
    b = a;  // b = 8
    console.log(b);   //8
    b = c; //b = 10
    var x = 5;
  }

  f(a,b,c);  // imprime b = a arg =8
  
  console.log(b);// imprime 10 MAL ES 9********
}


c(8,9,10);     //10, 8, 8 , 10
console.log(b); //imprime  10
console.log(x);  //imprime 1

/*** */

console.log(bar);   //undefined
console.log(baz);     //undefined  NOOO ERROR baz is not defined y no hace mas nada
foo();  //hola
function foo() { console.log('Hola!'); }
var bar = 1;  //con coma aqui si seria la respuesta como lo puse yo
baz = 2;

//**** */ NO LO ENTIENDO
var instructor = "Tony";
if(true) {
     var instructor = "Franco";
}
console.log(instructor); //Tony nooo Franco ????  ok

/***** */  // OK
var instructor = "Tony";
console.log(instructor);//TONY
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//FRANCO
   }
})();
console.log(instructor);//TONY

/** */
6 / "3"   //2  ok
"2" * "3"   //6  ok
4 + 5 + "px"  //45px NOO 9PX
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2  //NAN
7 / 0  //undefined NO Infinity
{}[0]
parseInt("09") //9

5 && 2  // 2    siempre es el segundo, a no ser que el primero sea 0, que seria el segundo
2 && 5 //5
5 && 2

0 && 2 //0


1 || 5 //1  siempre es el primero, a no ser que sea 0, que seria el 2do
5 || 0 //5

0 || 5 //5


[3]+[3]-[10]  //[-4]  NOOO   [23]
3>2>1  //true  NOOO da false
//[] == ![]

/*** */   //OK
function test() {
  console.log(a); //UNDEFINED
  console.log(foo()); //2

  var a = 1;
  function foo() {
     return 2;
  }
}

test();

/**/
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa'  ok

var test = obj.prop.getFullname;

console.log(test());  //undefined