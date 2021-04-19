/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0;
    let count = 0;
    for(let i of s){
        if(i==='(') count++;
        if(max<count) max = count;
        if(i===')') count--;
    }
    return max;
};