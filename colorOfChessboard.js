/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const odd = ['a', 'c', 'e', 'g'];
    if(odd.includes(coordinates[0])){
        if(coordinates[1] % 2 === 0) return true;
        else return false;
    }
    if(coordinates[1] % 2 ===  1) return true;
    else return false;
};


// alternatively
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const aCode = "a".charCodeAt();
    if (+coordinates[1] % 2 === 1) { // black
        return (coordinates.charCodeAt(0) - aCode) % 2 === 1;
    }
    
    return (coordinates.charCodeAt(0) - aCode) % 2 === 0;
};