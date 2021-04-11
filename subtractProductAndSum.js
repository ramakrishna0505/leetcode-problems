/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    for(let d of (n+'')){
        product*= +d;
        sum+= +d;
    }
    return product-sum;
};