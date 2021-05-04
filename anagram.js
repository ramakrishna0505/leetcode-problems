// input 'listen', 'silent' output true

function isAnagaram(left, right){
    let lObj = {}, rObj = {};
    if(left.length !== right.length) return false;
    for(let l of left){
        lObj[l] = ++lObj[l] || 1;
    }
    for(let r of right){
        rObj[r] = ++rObj[r] || 1;
        if(!lObj[r]) return false;
    }
    for(let l of left) {
        if(!(rObj[l])) return false;
        if(lObj[l] !== rObj[l]) return false;
    }
    return true;
}

console.log(isAnagaram('anagram', 'negaram'));