function create(words) {

   let content = document.getElementById('content');     // взимаме по ИД контент 

   for (let element of words) {   // за всеки елемент от дадения масив :
      let div = document.createElement('div');    // създаваме нов див
      let newParagraph = document.createElement('p'); // създаваме нов параграф
      newParagraph.textContent = element; // тексКонтента на новия параграф ни е всеки елемент от масива

      newParagraph.style.display = 'none'; // на новия параграф добавяме първоначално дисплей нон
      div.appendChild(newParagraph); // прикачваме параграфа към див
      content.appendChild(div); // прикачваме всеки див към дива с ИД контент
      div.addEventListener('click', show); // за всеки див да слуша при клик
   }
   
   function show(event) {
      event.target.children[0].style.display = 'inline'; // при клик дисплея да се покаже
   }

}