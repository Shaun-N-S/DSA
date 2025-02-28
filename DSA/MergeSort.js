//Merge sort

//write a program to sort an array in accesending order using merge sort algorithm;

function mergeSort(arr){ //time complexity : O(log n)
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

function merge(left,right){ //time complexity : O(n)
    let sortedArr = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }  
    }
    return [...sortedArr,...left,...right];
}


//Time complexity: O(n log n);
//Space complexity: O(n);

console.log(mergeSort([10,29,14,37,14]));





