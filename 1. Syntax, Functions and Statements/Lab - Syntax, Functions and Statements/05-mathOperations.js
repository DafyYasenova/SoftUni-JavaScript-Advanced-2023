function mathOperations(fisrtNum, secondNum, operator) {

    let result = 0;
    switch (operator) {
        case '+': result = fisrtNum + secondNum; break;
        case '-': result = fisrtNum - secondNum; break;
        case '*': result = fisrtNum * secondNum; break;
        case '/': result = fisrtNum / secondNum; break;
        case '%': result = fisrtNum % secondNum; break;
        case '**': result = fisrtNum ** secondNum; break;
    }
    console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');