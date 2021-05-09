function sumZero(list) {
    let l=0, r=list.length-1;
    while(l<r){
        let sum = list[l]+list[r];
        if(sum === 0){
            return [list[l], list[r]];
        } else if(sum > 0) r--;
        else l++;
    }
}

sumZero([-3,-2,-1,0,1,2]);


// alt


function sumZero(list) {
    for(let i=0;i<list.length;i++){
        for(let j=i+1;j<list.length;j++){
            if(list[i]+list[j] === 0) return [list[i], list[j]];
        }
    }
    return undefined;
}

sumZero([-3,-2,-1,0,1,2]);