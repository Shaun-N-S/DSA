// write a program to sort an array in accesending order using bubble sort algorithm

function bubbleSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([10,29,14,37,14]));


// Best case time complexity: O(n);
// Average case time complexity: O(n^2);
// Worst case time complexity: O(n^2);

// Space complexity: O(1);





