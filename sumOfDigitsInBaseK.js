/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    const converted = n.toString(k);
    let res = 0;
    for(let n of converted) res+= (+n);
    return res;
};