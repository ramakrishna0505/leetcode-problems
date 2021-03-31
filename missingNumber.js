/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const totalSum = (nums.length * (nums.length + 1) )/2;
    const missingTotal = nums.reduce((acc, num) => acc+num);
    return totalSum-missingTotal;
};