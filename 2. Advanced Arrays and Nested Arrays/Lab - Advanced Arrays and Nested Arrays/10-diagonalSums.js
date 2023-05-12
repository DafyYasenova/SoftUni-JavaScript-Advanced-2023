function diagonalSums(array) {

    let fisrtDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array[i].length; j++) {

            if (i === j) {
                fisrtDiagonal += array[i][j];
            }
        }
        secondDiagonal += array[i][array.length - 1 - i];
    }
    console.log(`${fisrtDiagonal} ${secondDiagonal}`);

}
diagonalSums([[20, 40],
[10, 60]]);
// 80 50
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);
//99 25 