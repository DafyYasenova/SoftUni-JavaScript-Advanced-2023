function greatestCommonDivisor(firstNum, secondNum) {
    if (secondNum == 0) {
        return firstNum;
    } else {
        return greatestCommonDivisor(secondNum, firstNum % secondNum);
    }
}
console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));


//2 way:
function greatestCommonDivisor(firstNum, secondNum) {
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

// 3 way:
function greatestCommonDivisor(firstNum, secondNum) {
    while (secondNum) {
     let  temp = secondNum;
       secondNum = firstNum % secondNum;
       firstNum = temp;
    }
    console.log(firstNum);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);