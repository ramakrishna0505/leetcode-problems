/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums, total = 0, i=0, res =[]) {
    if(i === nums.length) return res;
    total+=nums[i];
    res[i] = total;
    return runningSum(nums, total, i+1, res);
};