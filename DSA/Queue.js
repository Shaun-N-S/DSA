// Queue implementation 

class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "UnderFlow , Queue is Empty !";
        }
        return this.queue.shift();
    }

    isEmpty(){
        return this.size() === 0;
    }

    front(){
        if(this.isEmpty()){
            return "No element in the Queue";
        }

        return this.queue[0];
    }


    size(){
        return this.queue.length;
    }

    printQueue(){
        let queueString = "";
        for(let i=0;i<this.size();i++){
            queueString += this.queue[i] + ", ";
        }
        console.log("Queue : " + queueString);
    }

}



const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);

console.log(myQueue.printQueue());



// Circular Queue implementation

var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.size = 0;
}


MyCircularQueue.prototype.enQueue = function(value) {
    if(this.size === this.queue.length) return false;
        this.queue.push(value);
        return true;
}

MyCircularQueue.prototype.deQueue = function() {
    if(this.size === 0) return false;
    this.queue.shift();
    return true;
} 



MyCircularQueue.prototype.Front = function() {
    if(this.size === 0) return -1;
    return this.queue[0];
}


MyCircularQueue.prototype.Rear = function() {
    if(this.size === 0) return -1;
    return this.queue[this.size-1];
}

MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
}

MyCircularQueue.prototype.isFull = function() {
    return this.size === this.queue.length;
}

var obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(2);
obj.enQueue(3);
obj.enQueue(4);

console.log(obj.Front());
console.log(obj.Rear());
console.log(obj.deQueue());
console.log(obj.deQueue());
console.log(obj.Front());
console.log(obj.Rear());


// Queue using stack
// Implement a Queue using two stacks s1 and s2.

var MyQueue = function(){
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.enqueue = function(x){
    this.stack1.push(x);
};

MyQueue.prototype.dequeue = function(){
     if(this.stack2.length === 0){
        while(this.stack1.length !== 0){
            this.stack2.push(this.stack1.pop());
        }
     }
     return this.stack2.pop();
}

MyQueue.prototype.front = function(){
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length-1];
}

MyQueue.prototype.isEmpty = function(){
    return this.stack1.length === 0 && this.stack2.length === 0;
};

const queue = new MyQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());





