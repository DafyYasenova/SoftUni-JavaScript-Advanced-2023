function addItem() {

    let newItemsInput = document.getElementById('newItemText');
    let newItemsValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = newItemsInput.value;
    option.value = newItemsValue.value;

    let menu = document.getElementById('menu');
    
    if (newItemsInput !== '' && newItemsValue !== '') { // if input fields is NOT empty => append
        menu.appendChild(option);
    }

    newItemsInput.value = '';
    newItemsValue.value = '';
}