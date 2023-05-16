function diagonalAttack(array) {

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let resultMatrix = [];

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split(" ").map((el) => Number(el));
        resultMatrix.push(line);
    }

    for (let i = 0; i < resultMatrix.length; i++) {
        mainDiagonal += resultMatrix[i][i];
        secondaryDiagonal += resultMatrix[i][resultMatrix.length - i - 1];
    }
        if (mainDiagonal === secondaryDiagonal) {
            for (let i = 0; i < resultMatrix.length; i++) {
                for (let j = 0; j < resultMatrix.length; j++) {
                    if (i !== j && i !== resultMatrix.length - j - 1) {
                        resultMatrix[i][j] = mainDiagonal;
                    }
                }
            }
        
    }
   resultMatrix.forEach((el) => console.log(el.join(" ")));
 
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
/* 
5 15 15 15 1
15 4 15 2 15
15 15 3 15 15
15 4 15 2 15
5 15 15 15 1
*/
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']);
/* 
1 1 1
1 1 1
1 1 0
*/