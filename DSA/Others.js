

// function fibonacci(n){
//     let fib = [0,1];
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(3));
// console.log(fibonacci(5));

// function recursiveFibonacci(n){
//     if(n<2){
//         return n;
//     }
    
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
// }

// console.log(recursiveFibonacci(5));

// function factorial(n){
//     let result = 1;
//     for(let i=n;i>0;i--){
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(3));
// console.log(factorial(5));


// function recursiveFactorial(n){
//     if(n === 0){
//         return 1;
//     }
    
//     return n * recursiveFactorial(n-1);
// }

// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(5))
// console.log(recursiveFactorial(0))




// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(4));
// console.log(isPrime(5));


// function isPowerOfTwo(n){
//     if(n<1){
//         return false;
//     }
    
//     while(n>1){
//         if(n%2 !== 0){
//             return false;
//         }
//         n = n/2;
//     }
//     return true;
// }


// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(3))





//  Linear Search 

// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }


// console.log(linearSearch([1,2,3,4,5,6,7,8,9,0],6))
// console.log(linearSearch([1,2,3,4,5,6,7,8,9,0],10))





// Binary Search 

// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
    
//     while(leftIndex <= rightIndex){
//         let middle = Math.floor((leftIndex + rightIndex))/2;
        
//         if(target === arr[middle]){
//             return middle;
//         }
//         if(target < middle){
//             rightIndex = middle - 1;
//         }else{
//             leftIndex = middle + 1;
//         }
        
//     }
//     return -1;
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,0],4))


// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
    
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        
//         if(target === arr[middleIndex]){
//             return middleIndex;
//         }
        
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1;
//         }
//         else{
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1;
// }


// function binarySearch(arr,target){

//     let leftIndex = 0;
//     let rightIndex = arr.length -1 ;
    
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        
//         if(target===arr[middleIndex]){
//             return middleIndex;
//         }
        
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1;
//         }else{
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1;

// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,0],4))




// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1);
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1;
//     }
    
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2);
//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }
    
//     if(target < arr[middleIndex]){
//       return search(arr,target,leftIndex,middleIndex-1);
//     }else{
//       return search(arr,target,middleIndex+1,rightIndex);
//     }
// }


// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1);
// }

// function search(arr,target,leftIndex,rightIndex){
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2);
//     if(target === arr[middleIndex]){
//         return middleIndex;
//     }
    
//     if(target < arr[middleIndex]){
//       return search(arr,target,leftIndex,middleIndex - 1);
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex);
//     }
// }



// console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,0],4))



// Arrays


// const arr = [1,2,3,4];

// arr.push(5)
// console.log(arr)
// arr.unshift(0);
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.shift();
// console.log(arr)





// // object

// const object = {
//     name:'Shaun N S',
//     age:19
// }

// console.log(object)
// console.log(object.name)
// console.log(object.age)



// // Set

// const set = new Set([1,2,3,4,5,5,5])

// set.add(6)
// console.log(set.has(5))
// console.log(set)
// console.log(set.delete(6))
// console.log(set)




// LinkedLisst 


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    
    isEmpty(){
        return this.head === 0;
    }
    
    getSize(){
        return this.size()
    }
    
    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
}



const ll = new LinkedList();
console.log(ll.isEmpty())
console.log(ll.prepend(1))
console.log(ll.prepend(2))
console.log(ll.prepend(3))
console.log(ll.prepend(4))



































