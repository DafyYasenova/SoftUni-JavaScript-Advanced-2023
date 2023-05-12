function equalNeighbors(array) {

    let counter = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[0].length - 1; col++) {
            if (array[row][col] === array[row][col + 1]) {
                counter++;
            }
        }
    }
    for (let col = 0; col < array[0].length; col++) {
        for (let row = 0; row < array.length - 1; row++) {
            if (array[row][col] === array[row + 1][col]) {
                counter++;
            }
        }
    }

    console.log(counter);

}
equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
// 1
equalNeighbors([
['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
// 2