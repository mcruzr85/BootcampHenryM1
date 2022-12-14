"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(){
  if((this.left) && (this.right))
      return 1 + this.left.size() + this.right.size();
  else if ((this.left === null) && (this.right))
      return 1 + this.right.size();
  else if ((this.left) && (this.right === null))
      return 1 + this.left.size();
  else return 1;
}

BinarySearchTree.prototype.insert = function(value){
  if(value < this.value){
    if(this.left === null){
      let newArbol = new BinarySearchTree(value);
      this.left = newArbol;
    }else this.left.insert(value);    
  }else{
    if(this.right === null){
        let newArbol = new BinarySearchTree(value); 
        this.right = newArbol;
    }else this.right.insert(value);
  }  
};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  if(value > this.value){
      if(this.right === null) return false;
      else return this.right.contains(value);
    }
  if(value < this.value){
      if(this.left === null) return false;
      else return this.left.contains(value); 
    } 
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
  if(order === 'pre-order'){
    //root - izq -derecha
   cb(this.value);    
   if(this.left !== null) this.left.depthFirstForEach(cb, order); 
   if(this.right !== null) this.right.depthFirstForEach(cb, order);
 
   }else if(order === 'post-order'){
    //izq - der --root
   if(this.left !== null) this.left.depthFirstForEach(cb, order); 
   if(this.right !== null) this.right.depthFirstForEach(cb, order);
   cb(this.value);  

   }else{
    //in-order   izq-root-derecha
    if(this.left !== null) this.left.depthFirstForEach(cb, order); 
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
   }    
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){ 
      if(! arr){
        var arr = [];
      }
      cb(this.value);
      this.left && arr.push(this.left);
      this.right && arr.push(this.right);

      arr.length && arr.shift().breadthFirstForEach(cb, arr);
      return arr;
    };

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
