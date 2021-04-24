/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(let word of words){
        let shouldAdd = true;
        for(let l of word){
            if(!allowed.includes(l)) shouldAdd = false;
        }
        if(shouldAdd) count++;
    }
    return count;
};