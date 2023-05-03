function magicMatrices2(array) {

    let currentSum  = array[0].reduce((a, b) => a + b);

    for (let i = 0; i < array[0].length; i++) {

        let colSum = 0;

        for (let j = 0; j < array.length; j++) {
            colSum += array[i][j];
        }

        if (colSum !== currentSum) {
           return false;
        }
    }
    return true;
}
console.log(magicMatrices2([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
// true
console.log(magicMatrices2([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
// false
console.log(magicMatrices2([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));
                //true
