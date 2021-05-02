/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const strLen = s.length/2;
    s = s.toLowerCase();
    const vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    };
    let l = 0, r = 0;
    for(let i=0;i<strLen;i+=1){
        if(vowels[s[i]]) l+=1;
        if(vowels[s[strLen + i]]) r+=1;
    }
    return l === r;
};