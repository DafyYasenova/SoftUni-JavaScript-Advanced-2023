function extractArray(array) {
    let resultArray = [];
    let biggestNumber = Number.MIN_SAFE_INTEGER;
   
    let output = array.reduce((acc, el) => {
        if (el >= biggestNumber) {
            biggestNumber = el;
             resultArray= acc;
            resultArray.push(el);
            return resultArray;
        }
        return acc;
    }, []);

    return output;
}
console.log(extractArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// [1, 3, 8, 10, 12, 24]
console.log(extractArray([1, 2, 3, 4]));
// [1, 2, 3, 4]
console.log(extractArray([20, 3, 2, 15, 6, 1])); // [20]