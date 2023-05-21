function search() {

   let inputText = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0;

   for (let town of towns) {
      if (town.textContent.includes(inputText) && inputText !== "") {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;

      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }


   }
   let result = document.getElementById('result');
   result.textContent = `${counter} matches found`;
}
