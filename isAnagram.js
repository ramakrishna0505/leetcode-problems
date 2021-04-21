/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj1 = {}, obj2 = {};
    for(let c of s){
        obj1[c] ? obj1[c]++ : obj1[c]=1;
    }
    for(let a of t){
        obj2[a] ? obj2[a]++ : obj2[a]=1;
    }
    if(Object.keys(obj1).length!==Object.keys(obj2).length) return false;
    for(let c of s){
        if(obj1[c]!==obj2[c]) return false;
    }
    return true;
};