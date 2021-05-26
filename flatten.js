function flatten(list){
    let res = [];
    if(Array.isArray(list)){
        for(let l of list){
            res = res.concat(flatten(l));
        }
        return res;
    }
    return list;
}
flatten([1,2,3,[4,5]]);

// iterative

function flatten(list){
    let res = [];
    for(let l of list){
        let queue = [];
        queue.push(l);
        while(queue.length){
            let temp = queue.shift();
            if(Array.isArray(temp)) queue.push(...temp);
            else res.push(temp);
        }
    }
    return res;
}
flatten([1,[2,3],[4,5,[6,7]]]);