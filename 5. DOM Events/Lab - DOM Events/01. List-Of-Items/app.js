function addItem() {
    let input = document.getElementById('newItemText').value; // взима референцията и стойността на инпут полето
    let newElement = document.createElement('li'); // създавам нов ЛИ елемент
    newElement.textContent = input; //на новия елемент давам стойността от инпут полето
    let ul = document.getElementById('items'); // взимаме референция към родителя, на който ще закачим новото ЛИ
    ul.appendChild(newElement); //закачам Ли-то
    document.getElementById("newItemText").value = ""; //давам празна стойност на инпут полето, за да е чисто след добавяне на елемента

}