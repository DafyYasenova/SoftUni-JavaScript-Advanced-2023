function solve() {

    let inputFields = {

        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    };

    let [addSection, openSection, inProgressSection, completeSection] =
        Array.from(document.querySelectorAll('section')).map((section) => section.children[1]);

    document.getElementById('add').addEventListener('click', addClick);


    function addClick(event) {
        event.preventDefault();
        if (inputFields.name.value !== '' && inputFields.description.value !== '' && inputFields.date.value !== '') {
            // ако всички инпут полета са полълнени, тогава да се създават елементи в следващите секции
            let article = document.createElement("article");

            let h3 = document.createElement("h3");
            h3.textContent = inputFields.name.value;
            article.appendChild(h3);

            let p1 = document.createElement("p");
            p1.textContent = `Description: ${inputFields.description.value}`;
            article.appendChild(p1);

            let p2 = document.createElement("p");
            p2.textContent = `Due Date: ${inputFields.date.value}`;
            article.appendChild(p2);

            let div = document.createElement('div');
            div.classList.add('flex');

            let startBtn = document.createElement('button');
            startBtn.textContent = 'Start';
            startBtn.classList.add('green');
            div.appendChild(startBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('red');
            div.appendChild(deleteBtn);

            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.classList.add('orange');

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
}