function processOddPositions(array) {
    let newArray = [];
    for (let i = 1; i <= array.length; i += 2) {
        newArray.unshift(array[i] * 2);
    }
    return newArray.join(" ");
}
console.log(processOddPositions([10, 15, 20, 25])); //	50 30
console.log(processOddPositions([3, 0, 10, 4, 7, 3])); //	6 8 0