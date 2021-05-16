/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let col of grid){
        for(let i=0;i<col.length;i++){
            if(col[i]<0){
                count+=(col.length-i);
                break;
            }
        }
    }
    return count;
};