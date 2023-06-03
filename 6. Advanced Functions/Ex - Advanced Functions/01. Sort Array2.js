function sortArray(array, order) {

    return array.sort((a, b) => (order === 'asc' ? a - b : b - a));
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc')