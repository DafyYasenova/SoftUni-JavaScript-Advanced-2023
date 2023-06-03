function sortArray(array, order) {

    let sorted = {
        'asc': (a, b) => (a - b),
        'desc': (a, b) => (b - a),
    };

    array.sort(sorted[order]);
    return array;
 
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc')