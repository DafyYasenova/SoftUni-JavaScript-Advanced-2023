function sortingNumbers(array) {
    let resultArray = [];
    let sortedArray = array.sort((a, b) => a - b);

    while (sortedArray.length !== 0) {
        let cutElement = sortedArray.shift();
        resultArray.push(cutElement);

        if (sortedArray.length !== 0) {
            cutElement = sortedArray.pop();
            resultArray.push(cutElement);
        }
    }
    return resultArray;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]