function magicMatrices(array) {

    let isMagic = true;

    for (let i = 0; i < array.length -1; i++) {
        let rowSum = array[i].reduce((a, b) => a + b,0);
        let nextRowSum = array[i + 1].reduce((a, b) => a + b,0);

        let colSum = 0;
        let nextColSum = 0;

        for (let j = 0; j < array.length; j++) {
            colSum += array[i][j];
            nextColSum += array[i + 1][j];
        }

        if (rowSum !== nextRowSum || colSum !== nextColSum) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
// true
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
// false
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);
                //true
