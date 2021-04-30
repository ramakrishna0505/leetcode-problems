/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};


// without using array methods 
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let s = '';
    for(let a of address){
        if(a === '.') s+='[.]';
        else s+=a;
    }
    return s;
};