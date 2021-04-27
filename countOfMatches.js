/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n, m=0) { 
    if(n===1) return m;
    let t;
    if(n % 2 === 0){
        t = n/2;
        m = m + (n/2);
    } else {
        t = (n-1)/2;
        m = m + ((n-1)/2 + 1);
    }
    return numberOfMatches(t, m);
};