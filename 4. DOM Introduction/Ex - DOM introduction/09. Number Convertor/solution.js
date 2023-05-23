function solve() {

    let firstOption = document.createElement('option');
    // създавам опция в падащо меню със съответна стойност и наименование(с иннърХТМЛ)
    firstOption.value = 'binary';
    firstOption.innerHTML = 'Binary';

    let secondOption = document.createElement('option');
    secondOption.value = 'hexadecimal';
    secondOption.innerHTML = 'Hexadecimal';

    let selectMenuTo = document.getElementById("selectMenuTo");
    // извличам си падащото меню и на него му прикачвам двете опции
    selectMenuTo.appendChild(firstOption);
    selectMenuTo.appendChild(secondOption);

    let button = document.getElementsByTagName('button')[0];
    // взимаме бутона по таг нейм, тъй като връща коленция посочваме [0]

    button.addEventListener('click', function () {
// създавам на бутона функция при клик 
        let input = document.getElementById('input');
        let output = document.getElementById('result');

        if (selectMenuTo.value === 'binary') {
            output.value = Number(input.value).toString(2);
            // резултата обръщам в число .toString(2), за да стане само от 0 и 1
        } else if (selectMenuTo.value === 'hexadecimal') {
            output.value = Number(input.value).toString(16).toUpperCase();
            // хексадецимал числата със .toString(16), за да се получи като резултат число и главна буква
        }
    });
}