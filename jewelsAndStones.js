/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let noOfJewels = 0;
    const jewelsArr = [...jewels];
    for(let s of stones){
        if(jewelsArr.includes(s)) noOfJewels++;
    }
    return noOfJewels;
};