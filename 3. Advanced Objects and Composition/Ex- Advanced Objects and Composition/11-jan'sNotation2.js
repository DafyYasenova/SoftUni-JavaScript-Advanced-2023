function jansNotation(array) {

    let numbers = [];
    const operators = {
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
        "/": (a, b) => b / a,
        "*": (a, b) => b * a,
    }

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (Number.isInteger(element)) {
            numbers.push(element);
        } else {
            if (numbers.length < 2) {
                return ("Error: not enough operands!");
            }
            numbers.push(operators[element](numbers.pop(), numbers.pop()));
        }
    }

    if (numbers.length !== 1) {
        return 'Error: too many operands!';

    }
    return numbers[0];
}
console.log(jansNotation([3, 4, '+'])); // 7
console.log(jansNotation([5, 3, 4, '*', '-'])); // -7
console.log(jansNotation([7, 33, 8, '-'])); // Error: too many operands!
console.log(jansNotation([15, '/'])); // Error: not enough operands!
console.log(jansNotation([31, 2, "+", 11, "/"])); // 3
console.log(jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"])); // 6