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


// alternative approach using obj 
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let jewelObj = {};
    for(let j of jewels){
        jewelObj[j] = true;
    }
    for(let s of stones){
        if(jewelObj[s]) count++;
    }
    return count;
};