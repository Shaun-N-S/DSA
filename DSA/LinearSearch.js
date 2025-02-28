
const linearSearch = (num,target)=>{
    for(let i=0;i<num.length;i++){
        if(target === num[i]){
            return i;
        }
    }
    return -1
}
//Time Complexity O(n)
//Space Complexity O(1)
console.log(linearSearch([1,2,3,4,5,6,7,8,9],6));


//Global linear Search
const globalLinearSearch = (nums,target)=>{
    let result = [];
for(let i=0;i<nums.length;i++){
    if(target === nums[i]){
        result.push(i);
    }
}

if(result.length === 0) return -1;
return result;
}
//Time Complexity O(n)
//Space Complexity O(n)

console.log(globalLinearSearch([9,8,0,7,6,5,4,0,3,2,1],0))


// find Kth missing Positive

function findKthPositive (arr,k){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] <= k+count){
            count++
        }
    }
    return k+count;
}

console.log(findKthPositive([1,3,5,7,11],5))


// Maximum count of positive and negative numbers

function MaximumCount(nums){
    return Math.max(upperBond(nums),lowerBond(nums));
}

function upperBond(nums){
    let low = 0;
    let high = nums.length-1;

    while(low<high){
        let mid = Math.ceil((low+high)/2);

        if(nums[mid]<0){
            low = mid;
        }else{
            high = mid-1;
        }
    }

    return nums[0] >= 0 ? 0 : low + 1
}

function lowerBond(nums){
    let low = 0;
    let high = nums.length-1;

    while(low<high){
        let mid = Math.floor((low+high)/2);

        if(nums[mid]>0){
            high = mid;
        }else{
            low = mid+1;
        }
    }
    return nums[nums.length-1] <= 0 ? 0 : nums.length-low;
}

console.log(MaximumCount([-2,-1,-1,1,2,3]))