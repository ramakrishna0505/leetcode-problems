// assuming output contains only alphanumeric and case insensitive


function charCount(str) {
    let obj = {};
    str = str.toLowerCase();
    for(let s of str){
        if((s >= 'a' && s <= 'z') || s >= '0' && s <= '9'){
            obj[s] = (obj[s] || 0) + 1;
        }
    }
    return obj;
}

console.log(charCount('Hello, how are you? My number is 9491226699!'));