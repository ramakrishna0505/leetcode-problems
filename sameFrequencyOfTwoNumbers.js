function sameFrequency(num1, num2){
    let obj1 = {}, obj2 = {}, temp = num1;
    if((num1+'').length !== (num2+'').length) return false;
    while(num1 > 0){
        obj1[num1%10] = ++obj1[num1%10] || 1;
        num1 = Math.floor(num1/10);
    }
    while(num2 > 0){
        obj2[num2%10] = ++obj2[num2%10] || 1;
        num2 = Math.floor(num2/10);
    }
    while(temp > 0){
        if(obj2[temp%10] !== obj1[temp%10]) return false;
        temp = Math.floor(temp/10);
    }
    return true;
}
sameFrequency(9876, 6549);