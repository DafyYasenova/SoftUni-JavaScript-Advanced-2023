// with getElementByID:
function extractText() {
    let resultInput = document.getElementById('items');

    let result = document.getElementById('result');
    result.value += resultInput.textContent;
}
// with querySelector:
function extractText() {
    let resultInput = document.querySelectorAll('ul#items li');

    let result = document.querySelector('#result');

    for (let input of resultInput) {
        result.value += input.textContent + "\n";
    }

}