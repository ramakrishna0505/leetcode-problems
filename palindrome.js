function checkForPalindrome(input, length) {
    for(let i=0;i<length/2;i++){
        if(input[i] !== input[length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(checkForPalindrome('2332', '2332'.length))
console.log(checkForPalindrome('madam', 'madam'.length))
