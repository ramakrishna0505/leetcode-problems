function collectOddValues(nums, result=[]){
    if(nums.length === 0) return result;
    if(nums[0]%2===1) result.push(nums[0]);
    return collectOddValues(nums.slice(1), result);
}

collectOddValues([1,2,3,4,5,6,7,8,9]);