function countUniqueValues(list){
    let obj = {}, count = 0;
    for(let l of list){
        if(!obj[l]) {
            count++;
            obj[l] = 1;
        }
    }
    return count;
}

countUniqueValues([1,1,1,1,1,2]);