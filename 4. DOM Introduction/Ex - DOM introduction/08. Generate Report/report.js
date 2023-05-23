function generateReport() {

    let output = document.querySelector("#output");
    // взимаме аутпута по ИД 
    let checkBox = document.querySelectorAll('input[type ="checkbox"]'); //   ("thead tr th input")

    // взимаме колекция от всички елементи thead tr th с тип input
    let data = document.querySelectorAll("tbody tr");
    // взимаме допълнителната информация като колекция

    let result = [];

    for (let i = 0; i < data.length; i++) {
        //с цикъл въртим по всеки ред доп.инф-я
        let reportObject = {};

        for (let j = 0; j < checkBox.length; j++) {
            if (checkBox[j].checked) {
                // проверяваме дали колоната е чекната
                reportObject[checkBox[j].name] = data[i].children[j].textContent;
                // в обекта добавяме всеки чекнат елемент като  ключ в обекта, а като value текстКонтента на детето
            }
        }
        result.push(reportObject);
        // пушваме всеки обект в масива
    }
    output.textContent = JSON.stringify(result);
}