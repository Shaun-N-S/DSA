function Search(nums,target){
    let start = 0;
    let end = nums.length;

    while(start<=end){
        let middle = Math.floor((start+end)/2);

        if(nums[middle]===target){
            return middle;
        }else if(nums[middle]<target){
            start = middle+1;
        }else{
            end = middle -1;
        }

    }
    return -1;
}

//Time Complexity O(logn)
//Space Complexity O(1)

console.log(Search([1,2,3,4,5,6,7,8,9,0],2));