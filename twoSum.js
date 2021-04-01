let twoSum = function(nums, target) {
    let obj = {};
    for(let i =0;i<nums.length;i++){
        let targetIndex =  obj[target-nums[i]];    
        if(targetIndex>-1 && targetIndex!==i){
            return [i, targetIndex];
        } else {
            obj[nums[i]] = i;
        }
    }
    return null;
};