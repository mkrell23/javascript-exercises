const removeFromArray = function(array, ...toRemove) {
    for (const number of toRemove) {
        while(array.indexOf(number) >= 0 ) {
            array.splice(array.indexOf(number), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
