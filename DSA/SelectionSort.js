// Selection sort
//write a program to sort an array in accesending order using selection sort algorithm;

function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    return arr;
}


console.log(selectionSort([10,29,14,37,14]));



//Time complexity: O(n^2);
//Space complexity: O(1);