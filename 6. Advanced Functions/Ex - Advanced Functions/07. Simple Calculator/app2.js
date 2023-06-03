function calculator() {

    let firstNumber;
    let secondNumber;
    let result;

    function init(selector1, selector2, resultSelector) {   

        firstNumber = document.getElementById('num1');
        secondNumber = document.getElementById('num2');
        result = document.getElementById('result');
    }

    function add() {
        result.value = Number(firstNumber.value) + Number(secondNumber.value);
        // Използваме result.value, защото е инпут поле
    }

    function subtract() {
        result.value = Number(firstNumber.value) - Number(secondNumber.value);
    }

    return {            // като резултат връщаме изпълнението на функциите
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




