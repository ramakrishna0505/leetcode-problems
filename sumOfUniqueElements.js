/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {}, sum = 0;
    for(let n of nums) obj[n] = ++obj[n] || 1;
    for(let n of nums) if(obj[n]===1) sum+=n;
    return sum;
};