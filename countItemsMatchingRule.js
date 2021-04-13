/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let counter = 0;
    items.forEach((item)=> {
        const index = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
        if(item[index] === ruleValue) counter++;
    });
    return counter;
};