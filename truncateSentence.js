/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ');
}; 



// alternatively
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let res = '', space = 0;
    for(let c of s){
        if(c === ' '){
            space++;
            if(space === k) break;
        }
        res+=c;
    }
}; 
