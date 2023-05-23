function solve() { // case sensitive!
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let inputField = document.getElementById('searchField');
    let currentRow = document.querySelectorAll('tbody tr');

    function onClick() {
    for (let row of currentRow) {
       row.classList.remove('select');
       if (inputField.value !== '' && row.innerHTML.includes(inputField.value)) {
          row.className = 'select';
       }
    }
    inputField.value = '';
 }
}