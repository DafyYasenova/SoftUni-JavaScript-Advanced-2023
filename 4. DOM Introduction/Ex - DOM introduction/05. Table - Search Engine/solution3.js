function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
  
    function onClick() {
       let inputField = document.getElementById('searchField').value.toLowerCase();
       let currentRow = Array.from(document.querySelectorAll('tbody tr'));
 
       for (let row of currentRow) {
          let rowElement = row.textContent.toLowerCase();
          if (rowElement.includes(inputField)) {
             row.classList.add('select');
          } else
             row.classList.remove('select');
       }
 
       inputField = '';
    }
 
 }
 