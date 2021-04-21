/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let obj = {};
    for (let n of nums) {
        obj[n] ? obj[n]++ : obj[n] = 1;
    }
    for (let n of nums) {
        if (obj[n] === 1) return n;
    }
};