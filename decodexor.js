/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const arr = [first];
    encoded.forEach((num, i) => {
       arr.push(arr[i] ^ num);
    });
    return arr;
};