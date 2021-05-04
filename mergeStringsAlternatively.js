/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = '';
    let i=0;
    const len = Math.min(word1.length, word2.length);
    while(i<len) {
        res+=word1[i];
        res+=word2[i];
        i++;
    }
    while(i<word1.length){
        res+=word1[i];
        i++;
    }
    while(i<word2.length){
        res+=word2[i]
        i++;
    }
    return res;
};