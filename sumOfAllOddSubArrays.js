/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0, len = arr.length, subLen=1;
    while(subLen < len){
        for(let i=0;i<=len-subLen;i++){
            let subArr=arr.slice(i,i+subLen);
            for(let a of subArr) sum+=a;
        }
        subLen+=2;
    }
    if(arr.length % 2 === 1) for(let a of arr) sum+=a;
    return sum;
};

// alternative solution with formula 

/**
 * @param {number[]} arr
 * @return {number}
 */ 
var sumOddLengthSubarrays = function(arr) {
    const n = arr.length;
    let res = 0;
    
    for (let i = 0; i < n; i+=1) {
        res += Math.floor(((i + 1) * (n - i) + 1) / 2) * arr[i];
    }
    
    return res;
};