
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
            if (largest === index) break;

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
