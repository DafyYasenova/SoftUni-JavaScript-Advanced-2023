function solve() {

  let [generateArea, buyArea] = Array.from(document.querySelectorAll('textarea')); // взимам 2те текст ерии
  let [generateButton, buyButton] = Array.from(document.querySelectorAll('button')); // взимам 2та бутона

  generateButton.addEventListener('click', generateHandler); 
  buyButton.addEventListener('click', buyHandler);

  function generateHandler(event) {
    let data = JSON.parse(generateArea.value);          // парсвам си Джейсън инпута в масив от обекти
    data.forEach((furniture) => {                       // за всеки обект

      let tr = document.createElement('tr');            // създавам нов ТР елемент

      let td1 = document.createElement('td');           // създавам нов ТД елемент
      let img = document.createElement('img');          // създавам нов Имидж елемент
      img.src = furniture.img;                          // източника на картинката е в обекта.имидж
      td1.appendChild(img);                             // прикачвам картинката към първото ТД
      tr.appendChild(td1);                              // прикачвам ТД към новия ред

      let td2 = document.createElement('td');
      let p = document.createElement('p');
      p.textContent = furniture.name;
      td2.appendChild(p);
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(furniture.price);
      td3.appendChild(p2);
      tr.appendChild(td3);

      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(furniture.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);

      document.querySelector('tbody').appendChild(tr);      // прикачвам новия Тейбъл Рол към бодито на таблицата

    })

  }
  function buyHandler(event) {
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter((checkbox) => checkbox.checked);
    // за всеки чекнат/избран елемент 
    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    checkboxes.forEach((checkbox) => {
      let parent = checkbox.parentElement.parentElement;

      let [name, price, decFactor] = Array.from(parent.querySelectorAll('p'));
      boughtFurniture.push(name.textContent);
      totalPrice += Number(price.textContent);
      totalDecFactor += Number(decFactor.textContent);

    });

    buyArea.textContent = `Bought furniture: ${boughtFurniture.join(", ")}\n`;
    buyArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyArea.textContent += `Average decoration factor: ${totalDecFactor / checkboxes.length}`
  }
}