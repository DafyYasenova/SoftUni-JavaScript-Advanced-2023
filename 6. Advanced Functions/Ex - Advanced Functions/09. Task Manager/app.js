function solve() {
    // създаваме обект с инпут полетата от първата секция
    let inputFields = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    };

    let [addSection, openSection, inProgressSection, completeSection] =
        Array.from(document.querySelectorAll('section')).map((section) => section.children[1]);
    //за всички секции, взимаме 2рото дете, което е празен ДИВ, който ще манипулираме
    document.getElementById('add').addEventListener('click', addClick);

    
    function addClick(event) {
        event.preventDefault(); 
        // чрез preventDefault спираме дефолтното състояние на евента при клик
        if(inputFields.name.value !== '' && inputFields.description.value !== '' && inputFields.date.value !== ''){
        // ако всички инпут полета са полълнени, тогава да се създават елементи в следващите секции
        let article = document.createElement("article");
        // извиквам Криейт функцията, с параметрите, които са ми необходими
        article.appendChild(createEl("h3", inputFields.name.value));
        // в случая заглавие от интуп Н3, и текст контента от инпут полето 
        article.appendChild(createEl("p", `Description: ${inputFields.description.value}`));
        article.appendChild(createEl("p", `Due Date: ${inputFields.date.value}`));


        let div = createEl('div', '', 'flex'); 
        let startBtn = createEl('button', 'Start', 'green');
        div.appendChild(startBtn);

        let deleteBtn = createEl('button', 'Delete', 'red');
        div.appendChild(deleteBtn);
        let finishBtn = createEl('button', 'Finish', 'orange');

        article.appendChild(div);

        openSection.appendChild(article);

        Object.values(inputFields).forEach((inputFields) => (inputFields.value = ''));

        startBtn.addEventListener('click', onStartHandler);
        deleteBtn.addEventListener('click', onDeleteHandler);
        finishBtn.addEventListener('click', onFinishHandler);

        function onStartHandler() {
            startBtn.remove();
            div.appendChild(finishBtn);
            inProgressSection.appendChild(article);
        }

        function onDeleteHandler() {
            article.remove();
        }

        function onFinishHandler() {
            div.remove();
            completeSection.appendChild(article)
        }
    }
    }
    // тази фукнция създава нов ДОМ елемент по определен тип,
    // да има определен тексКонтент и ако е необходим клас, да му бъде добавен
    function createEl(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    // връща създадения елемент
    }

}