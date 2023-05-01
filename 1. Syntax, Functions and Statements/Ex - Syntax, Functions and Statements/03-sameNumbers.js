function sameNumbers(number) {
    let isSame = true;
    let sumOfChars = 0;
    let numberAsString = number.toString();

    for (let i = 0; i < numberAsString.length; i++) {
     
        if (numberAsString[0] !== numberAsString[i]) {
            isSame = false;
        }
        let number = Number(numberAsString[i]);
        sumOfChars += number;
    }
    console.log(isSame);
    console.log(sumOfChars);
}
sameNumbers(2222222);
sameNumbers(1234);