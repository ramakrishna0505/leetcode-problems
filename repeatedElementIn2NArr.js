/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let res = {};
    for(let n of nums){
        if(res[n]) return n;
        res[n] = 1;
    }
};