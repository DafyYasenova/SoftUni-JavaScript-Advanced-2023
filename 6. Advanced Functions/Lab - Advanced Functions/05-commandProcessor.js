function solution() {
   let outputString = '';

    return {
        append(str) {
            outputString += str;
        },
        removeStart(num) {
            outputString = outputString.substring(num);
        },
        removeEnd(num) {
            outputString = outputString.substring(0, outputString.length - num);
        },
        print() {
            console.log(outputString);
        },
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
// loa
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
//34