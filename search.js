function search(list, num){
    if(list.length === 0) return null;
    for(let i=0;i<list.length;i++){
        if(list[i] === num) return i;
    }
    return -1;
}

search([1,2,3,4,5,6], 11);


// binary search

function search(list, num){
    let min =0, max=list.length-1;
    while(min<=max){
        const middle = Math.floor((min+max)/2);
        if(num > list[middle]){
            min = middle + 1;
        } else if(num < list[middle]){
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

search([1,2,3,4,5,6], 6);