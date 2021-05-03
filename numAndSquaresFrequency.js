// input ex: [1,2,3], [4,1,9] output true

function same(nums, squared){
    if(nums.length !== squared.length) return false;
    let numObj = {}, sqObj = {};
    for(let s of squared) {
        sqObj[s] = ++sqObj[s] || 1;
    }
    for(let n of nums) {
        numObj[n] = ++numObj[n] || 1;
        if(!(sqObj[n**2])) return false;
    }
    for(let n of nums) {
        if(sqObj[n**2] !== numObj[n]) return false;
    }
    return true;

}

console.log(same([1,2,3], [1,4,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));