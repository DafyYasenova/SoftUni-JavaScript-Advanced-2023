function deleteByEmail() {
    let inputField = document.querySelector('input[type="text"]');  // взимаме инпут полето 
    let result = document.getElementById('result');
    let currentRows = document.querySelectorAll('tbody tr'); // взимаме редовете в таблицата

    for (let row of currentRows) { // за всеки ред от таблицата
        if (inputField.value === row.children[1].textContent) {
            result.textContent = 'Deleted.';
            row.parentElement.removeChild(row);

        } else {
            result.textContent = 'Not found.';
        }
    }
    inputField = ''; // изчистваме инпут полето
}