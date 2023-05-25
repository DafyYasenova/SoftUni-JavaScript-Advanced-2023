function addItem() {
    let input = document.getElementById('newItemText').value; // взимаме стойността на инпут полето
    let newElement = document.createElement('li'); // създавам нов ЛИ елемент
    newElement.textContent = input; // добавяме инпут стойността на новия елемент
    let ulResult = document.getElementById('items');
    ulResult.appendChild(newElement); //прикачвам новия елемент в дървото
    document.getElementById('newItemText').value = ''; // занулявам инпута
    let deleteBtn = document.createElement('a'); // създавам линк анкър таг
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';

    newElement.appendChild(deleteBtn);  // закачвам делийт бутона на новия елемент
    deleteBtn.addEventListener('click', deleteHandler); // при клик на Делийт извиквам функция да изтрие целия ЛИ еменент
    function deleteHandler(event) {

        let link = event.target;
        let li = link.parentElement;
        li.remove();
    }
}