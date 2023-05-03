function printEveryNElementFromAnArray(array, step) {

    let resultArray = [];
    for (let i = 0; i < array.length; i += step) {
        resultArray.push(array[i]);
    }
    return resultArray;
}
console.log(printEveryNElementFromAnArray(['5', '20', '31', '4', '20'], 2));
// ['5', '31', '20']		
printEveryNElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
// ['dsa', 'test']		
printEveryNElementFromAnArray(['1', '2', '3', '4', '5'], 6);
//	['1']
