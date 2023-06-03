function calculator() {

    let firstNumber;
    let secondNumber;
    let result;

    function init(selector1, selector2, resultSelector) {
        // приема по условие селекторите : calculate.init('#num1', '#num2', '#result');
        firstNumber = document.querySelector(selector1);
        secondNumber = document.querySelector(selector2);
        result = document.querySelector(resultSelector);

    }
    function add() {
        result.value = Number(firstNumber.value) + Number(secondNumber.value);
        // Използваме result.value, защото е инпут поле
    }
    function subtract() {
        result.value = Number(firstNumber.value) - Number(secondNumber.value);
    }

    // като резултат връщаме изпълнението на функциите
    return {
        init,
        add,
        subtract
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




