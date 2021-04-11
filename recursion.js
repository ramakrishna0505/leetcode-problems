let user = {
    name: 'Ramakrishna',
    address: {
        personal: {
            city: 'Vizag',
            area: 'Narasimhanagar',
        },
        work: {
            city: 'Hyderabad',
            area: {
                landmark: 'DLF Gachibowli',
            }
        }
    }
}

let result = {};

let recursion = (obj, parent) => {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            recursion(obj[key], parent + '_' + key);
        } else {
            result[parent + '_' + key] = obj[key];
        }
    }
    return result;
}

console.log(recursion(user, 'user'));