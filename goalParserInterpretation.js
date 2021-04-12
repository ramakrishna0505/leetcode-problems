/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = []
    for(let i=0;i<command.length; i++) {
        if(command[i]==='G'){
            result.push('G');
            continue;
        } 
        if(command[i]==='('){
            if(command[i+1]===')'){
                result.push('o');
                i++;
            } else {
                result.push('al');
            }
        } 
    }
    return result.join('');
};