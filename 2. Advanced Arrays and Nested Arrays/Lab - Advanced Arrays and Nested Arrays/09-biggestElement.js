function biggestElement(array) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {

            biggestNumber = Math.max(array[i][j], biggestNumber);
        }
    }
    return biggestNumber;
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]])) // 145
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])) // 33