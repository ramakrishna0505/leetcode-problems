/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0, len = mat.length;
    for(let i=0;i<len;){
        for(let j=0;j<len;){
            res+=mat[i][j];
            i++;
            j++;
        }
    }
    for(let i=len-1;i>=0;){
        for(let j=0;j<len;){
            if(len % 2 === 1 && i === j) {
                i--;
                j++;
                continue;
            }
            res+=mat[i][j];
            i--;
            j++;
        }
    }
    return res;
};


// alternatively 

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let counter = 0;
  let sum = 0;
  let length = mat.length - 1;
  // Loop trough matrix
  mat.forEach((arr) => {
    sum += arr[length];
    if (counter != length) {
      sum += arr[counter];
    }
    counter++;
    length--;
  });
  return sum;
};