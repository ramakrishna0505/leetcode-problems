function maxSubArraySum(list, length){
    let max = 0, sum=0;
    if(list.length === 0) return null;
    for(let i=0;i<=Zlist.length-length;i+=1){
        sum=subSum(i, i+length, list);
        if(max<sum) max = sum;
    }
    return max;
}

function subSum(first, last, list){
    let sub = 0;
    for(let i=first;i<last;i++){
        sub+=list[i];
    }
    return sub;
}

maxSubArraySum([1,2,5,2,8,1,5], 4);


// optimized
function maxSubArraySum(list, length){
    let max = 0, sum=0;
    if(list.length<length) return null;
    for(let i=0;i<length;i++){
        max+=list[i];
    }
    sum=max;
    for(let i=length;i<list.length;i++){
        sum = sum - list[i-length] + list[i];
        max = Math.max(sum, max);
    }
    return max;
}


maxSubArraySum([1,2,5,2,8,1,5], 4);