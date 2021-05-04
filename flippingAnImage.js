/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let res = [];
    for (let i of image){
        let temp = [];
        for(let j=i.length-1;j>=0;j--){
            if(i[j] === 0) temp.push(1);
            else temp.push(0);
        }
        res.push(temp);
    }
    return res;
};