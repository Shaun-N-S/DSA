//Quick Sort

//write a program to sort an array in accesending order using quick sort algorithm;


function quickSort(arr){

    if(arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=1;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

console.log(quickSort([10,29,14,37,14])); 

//Time complexity: O(n^2);
//Space complexity: O(n);













/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
    return quickSort(arr);
};

function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Choose a random pivot and swap it with the start
    let randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    swap(arr, start, randomIndex);

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    let stack = [];
    stack.push({ left, right });

    while (stack.length) {
        let { left, right } = stack.pop();

        if (left < right) {
            const pivotIndex = pivot(arr, left, right);
            stack.push({ left, right: pivotIndex - 1 });
            stack.push({ left: pivotIndex + 1, right });
        }
    }

    return arr;
}

console.log(sortArray([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
