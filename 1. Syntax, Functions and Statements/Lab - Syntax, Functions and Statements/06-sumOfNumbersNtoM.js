function sumOfNumbersNtoM(n, m) {
    let fisrtNum = Number(n);
    let secondNum = Number(m);
    let sumOfNumbers = 0;
    
    for (let i = fisrtNum; i <= secondNum; i++) {
        sumOfNumbers += i;
    }
    console.log(sumOfNumbers);
}
sumOfNumbersNtoM('1', '5');
sumOfNumbersNtoM('-8', '20');