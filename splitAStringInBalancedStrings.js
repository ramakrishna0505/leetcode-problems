// My initial solution
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp = [];
    let lastPushed = '';
    let result = 0;
    for(let c of s) {
        if(temp === []) {
            temp.push(c);
            lastPushed = c;
        } else {
            if(c === lastPushed){
                temp.push(c);
                if(getRCount(temp) === getLCount(temp)){
                    result++;
                    temp = [];
                    lastPushed ='';
                }
            } else {
                temp.push(c);
                lastPushed = c;
                if(getRCount(temp) === getLCount(temp)){
                    result++;
                    temp = [];
                    lastPushed ='';
                }
            }
        } 
    }
    return result;
};

function getRCount(arr) {
    let count = 0;
    for(let a of arr){
        if(a === 'R') count++;
    }
    return count;
}

function getLCount(arr) {
    let count = 0;
    for(let a of arr){
        if(a === 'L') count++;
    }
    return count;
}


// A far better optimised solution
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let total = 0;
    for(let c of s) {
        c === 'R' ? rCount++ : lCount++;
        if(rCount === lCount) total++;
    }
    return total;
};
