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