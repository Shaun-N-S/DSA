//Insertion Sort
//write a program to sort an array in accesending order using insertion sort algorithm;

function insertionSort(arr){
    let n = arr.length;
    for(let i=1;i<n;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log(insertionSort([10,29,14,37,14]));
//Time complexity: O(n^2);
//Space complexity: O(1);   