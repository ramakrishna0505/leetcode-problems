/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let res = [];
    for(let i=0;i<prices.length;i++){
        let isFound = false;
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]>=prices[j]){
                res[i] = prices[i] - prices[j];
                isFound = true;
                break;
            }
        }
        if(!isFound) res[i] = prices[i];
    }
    return res;
};