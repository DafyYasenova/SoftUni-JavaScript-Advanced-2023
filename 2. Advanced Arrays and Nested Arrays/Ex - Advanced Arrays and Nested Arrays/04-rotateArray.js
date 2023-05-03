function rotateArray(array, rotateCount) {

    for (let i = 0; i < rotateCount; i++) {
        let removeEl = array.pop();
        array.unshift(removeEl);
    }
    console.log(array.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2); // 3 4 1 2 
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15); // Orange Coconut Apple Banana

