/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = Math.max(...candies);
    let res = [];
    for(let c of candies){
        if(c+extraCandies < greatest) res.push(false);
        else res.push(true);
    }
    return res;
};