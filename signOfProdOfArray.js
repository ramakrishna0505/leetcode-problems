/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums, i=0, prod=1) {
    if(i===nums.length) return prod>0 ? 1 : prod<0 ? -1 : 0;
    prod *= nums[i++];
    return arraySign(nums, i, prod);
};