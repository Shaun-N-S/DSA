// Stack manipulation functions
 

class Stack {
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is Empty ! , underFlow ,can't perform pop operation";
        }

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty ! , underFlow, can't perform peek operation";
        }

        return this.stack[this.size() - 1];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }
}


const stack = new Stack();

stack.push(10) 
stack.push(69)  
stack.push(420) 


stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack.size());





// Given an input string s, reverse the order of the words.

//Input : "the sky is blue" -----> Output : "blue is sky the"
//Input : "  hello world  " -----> Output : "world hello"
//Input : "a good   example" -----> Output : "example good a"


const reverseWords = function (s){
    const splitS = s.split(" ");
    const stack = [];
    for(let i of splitS){
        stack.push(i);
    }

    let finalS = "";

    while(stack.length){
        const current = stack.pop();

        if(current){
            finalS += " " + current ;
        }
    }

    return finalS.trim();

}


console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good       example")); // "example good a"

//Time Complexity : O(n)
//Space Complexity : O(n) , n is the length




// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//Input : s = "()" -----> Output : true
//Input : s = "()[]{}" -----> Output : true
//Input : s = "(]" -----> Output : false
//Input : s = "([)]" -----> Output : false
//Input : s = "{[]}" -----> Output : true


function isValid(s){
    const stack = [];

    for(let i=0;i<s.length;i++){
        const char = s[i];

        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }else if(char === ")" || char === "]" || char === "}"){
            if(isEmpty(stack)){
                return false;
            }

            const top = stack.pop();
            if((char === ")" && top !== "(") ||
              (char === "]" && top !== "[") ||
              (char === "}" && top !== "{")
        ){
            return false;
        }
        }
    }
    return isEmpty(stack);
}

function isEmpty(stack){
    return stack.length === 0;
}


const string1 ="([]{})";
console.log(isValid(string1)); // false


//Time Complexity : O(n)
//Space Complexity : O(n) , n is the length of the string


// Stack using Queue
// Implement the following operations of a stack using queues.



var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

MyStack.prototype.push = function(x) {
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift());
    }
    this.q1.push(x);
    while (this.q2.length !== 0) {
        this.q1.push(this.q2.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.q1.shift();
};

MyStack.prototype.top = function() {
    return this.q1[0];
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

var stack1 = new MyStack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.pop());   // 30
console.log(stack1.top());   // 20
console.log(stack1.empty()); // false


// Stack using queue using 1 queue

var MyStack = function() {
    this.q1 = [];
};

MyStack.prototype.push = function(x) {
    this.q1.push(x);
    let size = this.q1.length;
    
    // Rotate queue to bring the last pushed element to the front
    while (size > 1) {
        this.q1.push(this.q1.shift());
        size--;
    }
};

MyStack.prototype.pop = function() {
    return this.q1.shift();  // Removes the last pushed element (LIFO)
};

MyStack.prototype.top = function() {
    return this.q1[0];  // Returns the top element
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

// Example Usage
const stack1 = new MyStack();

stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.pop());   // 30
console.log(stack1.top());   // 20
console.log(stack1.empty()); // false








