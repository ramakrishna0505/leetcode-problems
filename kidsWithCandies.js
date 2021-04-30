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


// alternatively without using math.max
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let h = 0, res = [];
    for(let c of candies){
        if(c > h) h = c;
    }
    for(let c of candies){
        if(c+extraCandies >= h) res.push(true);
        else res.push(false);
    }
    return res;
};