function extractArray(array) {

    let resultArray = [];
    let biggestNumber = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i] >= biggestNumber) {
            biggestNumber = array[i];
            resultArray.push(biggestNumber);
        }
    }
    return resultArray;
}
console.log(extractArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// [1, 3, 8, 10, 12, 24]
extractArray([1, 2, 3, 4])
// [1, 2, 3, 4]
extractArray([20, 3, 2, 15, 6, 1]) // [20]