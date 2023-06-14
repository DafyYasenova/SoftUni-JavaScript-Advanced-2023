window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let originalCostPriceInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', onPublish);

  let tableBody = document.getElementById('table-body');
  let ulCarList = document.getElementById('cars-list');
  let profit = document.getElementById('profit');

  function onPublish(e) {
    e.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalPrice = originalCostPriceInput.value;
    let sellingPrice = sellingPriceInput.value;

    if (make == '' || model == '' || year == '' ||
      fuel == '' || originalPrice == '' || sellingPrice == '' ||
      originalPrice > sellingPrice) {
      return;
    }

    let newTrEl = document.createElement('tr');
    newTrEl.classList.add('row');

    let tdMake = document.createElement('td');
    tdMake.textContent = make;

    let tdModel = document.createElement('td');
    tdModel.textContent = model;

    let tdYear = document.createElement('td');
    tdYear.textContent = year;

    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuel;

    let tdOriginalPrice = document.createElement('td');
    tdOriginalPrice.textContent = originalPrice;

    let tdSellPrice = document.createElement('td');
    tdSellPrice.textContent = sellingPrice;

    let td = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    // editBtn.addEventListener('click', onEdit);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.textContent = 'Sell';
    // sellBtn.addEventListener('click', onSell);

    td.appendChild(editBtn);
    td.appendChild(sellBtn);

    newTrEl.appendChild(tdMake);
    newTrEl.appendChild(tdModel);
    newTrEl.appendChild(tdYear);
    newTrEl.appendChild(tdFuel);
    newTrEl.appendChild(tdOriginalPrice);
    newTrEl.appendChild(tdSellPrice);
    newTrEl.appendChild(td);

    tableBody.appendChild(newTrEl);
    clearInputField();

    
    editBtn.addEventListener('click', (e) => {

      newTrEl.remove();

      makeInput.value = tdMake.textContent;
      modelInput.value = tdModel.textContent;
      yearInput.value = tdYear.textContent;
      fuelInput.value = tdFuel.textContent;
      originalCostPriceInput.value = tdOriginalPrice.textContent;
      sellingPriceInput.value = tdSellPrice.textContent;

    });
    // използвам анонимна функция при клик, за да се случи събитието само веднъж
    sellBtn.addEventListener('click', (e) => {
     

      let liElement = document.createElement('li');
      liElement.classList.add('each-list');

      let spanCar = document.createElement('span');
      spanCar.textContent = make + ' ' + model;
      let spanYear = document.createElement('span');
      spanYear.textContent = year;
      let spanPrice = document.createElement('span');
      let totalPrice = Number(sellingPrice - originalPrice)
      spanPrice.textContent = totalPrice;

      liElement.appendChild(spanCar);
      liElement.appendChild(spanYear);
      liElement.appendChild(spanPrice);

      ulCarList.appendChild(liElement);

      newTrEl.remove();

      profit.textContent = (Number(profit.textContent) + (totalPrice)).toFixed(2);

    });
  }
  function clearInputField(e) {
    e ? e.preventDefault() : null;

    makeInput.value = ''
    modelInput.value = '';
    yearInput.value = '';
    fuelInput.value = '';
    originalCostPriceInput.value = '';
    sellingPriceInput.value = '';

  }
}
