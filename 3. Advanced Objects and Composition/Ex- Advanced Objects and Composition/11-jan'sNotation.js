function jansNotation(array) {

    let numbers = [];
    let operators = [];

    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            numbers.push(array[i]);
        } else {
            operators.push(array[i]);
        }

        if (numbers.length >= 2 && operators.length === 1) {
            while (operators.length > 0) {
                let fisrtNum = numbers[numbers.length - 2];
                let secondNumber = numbers[numbers.length - 1];

                let result = 0;
                if (operators[0] === "+") {
                    result = fisrtNum + secondNumber;
                } else if (operators[0] === "-") {
                    result = fisrtNum - secondNumber;
                } else if (operators[0] === "*") {
                    result = fisrtNum * secondNumber;
                } else if (operators[0] === "/") {
                    result = fisrtNum / secondNumber;
                }

                // numbers.splice(- 2, 2);
                numbers.splice(numbers.length - 2);
                operators.shift();
                numbers.push(result);
            }
        }
    }

    if (numbers.length > 1) {
        console.log('Error: too many operands!');
        return;
    }
    if (operators.length - numbers.length >= 0) {
        console.log("Error: not enough operands!")
        return;
    }

    console.log(numbers[0]);
}
jansNotation([3, 4, '+']); // 7
jansNotation([5, 3, 4, '*', '-']); // -7
jansNotation([7, 33, 8, '-']) // Error: too many operands!
jansNotation([15, '/']) // Error: not enough operands!
jansNotation([31, 2, "+", 11, "/"]); // 3
jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]) // 6