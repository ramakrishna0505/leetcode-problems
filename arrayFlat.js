function flat(arr, result=[]){
    if (Array.isArray(arr)) {
    for (let item of arr) {
        flat(item, result)
    }
    return result;
} else {
    result.push(arr);
}
}


const array = [1, 2, 3, 4, 5, 6, [12, 23, [34, 89]], [100, 200]];

console.log(flat(array));