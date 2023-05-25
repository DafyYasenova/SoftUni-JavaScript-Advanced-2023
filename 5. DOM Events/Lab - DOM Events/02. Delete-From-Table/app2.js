function deleteByEmail() {

    let email = document.getElementsByName('email')[0];
    // взимаме инпут полето по таг, и тъй като е колекция- [0]
    let result = document.getElementById('result');
    let secondCol = document.querySelectorAll('#customers tr td:nth-child(2)');
    // взимаме втората колона на реда, като 2ро дете на tr td

    for (let td of secondCol) {
        // за всеки ред от таблицата
        if (email.value === td.textContent) {
            result.textContent = 'Deleted.';
          let row =  td.parentElement;
          row.parentElement.removeChild(row);
        } else {
            result.textContent = 'Not found.';
        }
    }
    email.value = '';
    // изчистваме инпут полето
}