function biggerHalf(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let newArray = [];
    let length = Math.ceil(sortedArray.length / 2);

    if (sortedArray.length % 2 == 0) {
        newArray = sortedArray.splice(length);
    } else {
        (newArray = sortedArray.splice(length - 1));
    }
    return newArray;

}
console.log(biggerHalf([4, 7, 2, 5])); // [5, 7]
biggerHalf([3, 19, 14, 7, 2, 19, 6]); //[7, 14, 19, 19]