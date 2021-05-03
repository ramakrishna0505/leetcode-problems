/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const res = [];
    for(let i=left;i<=right;i++){
        let shouldAdd = true;
        const numbers = (i + '').split('');
        for(let n of numbers){
            if(i%(+n)!==0) shouldAdd = false;
        }
        if(shouldAdd) res.push(i);
    }
    return res;
};