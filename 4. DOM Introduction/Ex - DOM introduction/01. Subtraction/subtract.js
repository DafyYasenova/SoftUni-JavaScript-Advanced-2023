function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
   
    let  resultNumbers = firstNum - secondNum;
    document.getElementById('result').textContent = resultNumbers;

}

