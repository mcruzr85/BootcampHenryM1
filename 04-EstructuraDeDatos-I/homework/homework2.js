function Queue(){
    this.Queue = [];
}

Queue.prototype.enqueue = function(element){
    this.Queue.push(element);
}

Queue.prototype.dequeue = function(element){
    this.Queue.shift();
}

Queue.prototype.size = function(element){
    this.Queue.length;
}

let myQueue = new Queue();
