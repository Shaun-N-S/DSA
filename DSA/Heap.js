
// Max Heap Implementation
// A Max Heap is a complete binary tree in which the value of the root node is greater than or equal to the values of the children of that node.
// The parent node is always greater than or equal to its child nodes.
// The root node is always the maximum element in the heap.
// The time complexity of the heapify operation is O(log n).
// The time complexity of the insert operation is O(log n).
// The time complexity of the delete operation is O(log n).


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    deleteRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        while (true) {
            let largest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest === index) return;

            this.swap(index, largest);
            index = largest;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    printHeap() {
        console.log(this.heap);
    }
}

// Example Usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2);
maxHeap.insert(6);

console.log("Max Heap:", maxHeap.heap);
console.log("Deleted Root:", maxHeap.deleteRoot());
console.log("Heap After Deletion:", maxHeap.heap);



// Min Heap Implementation

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    deleteRoot() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(index) {
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    printHeap() {
        console.log(this.heap);
    }
}

// Example Usage:
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);
minHeap.insert(6);

console.log("Min Heap:", minHeap.heap);
console.log("Deleted Root:", minHeap.deleteRoot());
console.log("Heap After Deletion:", minHeap.heap);



//Heapify (Converting an Unsorted Array into a Heap)


function heapify(arr,index,size){
    let largest = index;
    let left = 2*index + 1;
    let right = 2*index + 2;

    if(left<size && arr[left]>arr[largest]) largest = left;
    if(left<size && arr[right]>arr[largest]) largest = right;

    if(largest !== index){
        [arr[index],arr[largest]] = [arr[largest],arr[index]];
        heapify(arr,largest,size);
    }
}

function buildMaxHeap(arr){
    let n = arr.length;
    for(let i = Math.floor(n/2);i>=0;i--){
        heapify(arr,i,n);
    }
    return arr;
}


let array = [10, 5, 20, 2, 6];
console.log("Heapified Array:", buildMaxHeap(array));




// Heap Sort   (Time Complexity: O(n log n))    

function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    return arr;
}

// Example
let arr = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arr);
console.log("Sorted Array:", heapSort(arr));
