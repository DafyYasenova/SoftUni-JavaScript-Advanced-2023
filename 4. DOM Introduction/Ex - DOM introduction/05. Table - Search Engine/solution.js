function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputField = document.getElementById('searchField').value.toLowerCase();
      let currentRow = document.querySelectorAll('tbody tr');

      for (let row of currentRow) {
         thisRow = row.textContent.toLowerCase();

         if (thisRow.includes(inputField)) {
            row.setAttribute("class", "select");
         } else {
            row.removeAttribute("class");
         }
      }
      inputField = '';
   }
}
 