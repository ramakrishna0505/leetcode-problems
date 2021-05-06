/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let res = 0, maxLen = 0;
    for(let rect of rectangles){
        const squareLen = Math.min(rect[0], rect[1]);
        if(squareLen > maxLen) {
            maxLen = squareLen;
            res = 1;
        } else {
            if(squareLen === maxLen) res+=1;
        }
    }
    return res;
};