function subSum(numbers, startindex, endIndex) {
    let result = 0;
    if (Array.isArray(numbers) === false) {
        return NaN;
    }
    if (startindex < 0) {
        startindex = 0;
    }
    if (endIndex > numbers.length -1) {
        endIndex = numbers.length - 1;
    }
    for (let i = startindex; i <= endIndex; i++) {
        result += Number(numbers[i]);
    }

    return result;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum("text", 0, 2));