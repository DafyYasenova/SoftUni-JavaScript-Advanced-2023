function negativeOrPositiveNumber(array) {

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            result.push(array[i]);
        } else if (array[i] < 0) {
            result.unshift(array[i]);
        }
    }
    
    console.log(result.join('\n'));
}
negativeOrPositiveNumber([7, -2, 8, 9]);
/* 
-2
7
8
9
*/
negativeOrPositiveNumber([3, -2, 0, -1]);
/* 
-1
-2
3
0
*/