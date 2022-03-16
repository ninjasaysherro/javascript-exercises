const removeFromArray = function(arr, ...value) {
    newArray = []
    for (i = 0; i < arr.length; i++) {
        newArray.push(arr[i])
        for (j = 0; j < value.length; j++) {
            if (arr[i] === value[j]) {
                newArray.pop();
            }
        }
    }return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;