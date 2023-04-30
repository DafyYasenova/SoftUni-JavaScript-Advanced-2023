function aggregateElements(array) {
    let sumInverse = 0;
    let sumAllElements = array.reduce((a, b) => a + b);

    for (let i = 0; i < array.length; i++) {
        let inversValues = 1 / array[i];
        sumInverse += inversValues;
    }
    console.log(sumAllElements);
    console.log(sumInverse);
    console.log(array.join(''));
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])