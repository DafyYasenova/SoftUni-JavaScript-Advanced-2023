function calc() {
    let fisrtNum = document.getElementById('num1').value;

    let secondNum = document.getElementById('num2').value;
    let sum = Number(fisrtNum )+ Number(secondNum);
    let sumResult = document.getElementById('sum');
    sumResult.value = sum;

}
