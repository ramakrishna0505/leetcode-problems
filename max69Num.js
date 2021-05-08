/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const n = num + '';
    let h = '', highest=0;
    for(let i=0;i<n.length;i++) h+='9';
    if(n === h) return num;
    for(let i=0;i<n.length;i++){
        let t = n.split('');
        t[i] = n[i] === '9' ? '6' : '9';
        t = t.join('');
        if(highest < +t) highest = t;
    }
    return highest;
};