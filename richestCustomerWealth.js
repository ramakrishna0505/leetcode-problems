/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let largest = 0;
    for(let acc of accounts){
        let tot = 0;
        for(let c of acc){
            tot+=c;
        }
        if(tot>largest) largest = tot;
    }
    return largest;
};