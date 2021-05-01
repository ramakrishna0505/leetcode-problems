/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let len = s.length, integer=romanObj[s[len-1]];
    for(let i=len-2;i>=0;i--){
        if(romanObj[s[i]] < romanObj[s[i+1]]) integer-=romanObj[s[i]];
        else integer+=romanObj[s[i]];
    }
    
    return integer;
};