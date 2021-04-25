/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let lower = [];
    for(let i=0;i<str.length;i++){
        let charCode = str.charCodeAt(i);
        if(charCode >= 65 && charCode<90 ) charCode+=32;;
        lower.push(charCode);
    }
    return String.fromCharCode(...lower);
};