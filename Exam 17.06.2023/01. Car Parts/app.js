window.addEventListener('load', solve);

function solve() {

    let carInput = document.getElementById('car-model');
    let yearInput = document.getElementById('car-year');
    let partNameInput = document.getElementById('part-name');
    let partNumberInput = document.getElementById('part-number');
    let conditionInput = document.getElementById('condition');

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    let infoList = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let completeText = document.getElementById('complete-text')

    function onNext(e) {
            e.preventDefault();

            let car = carInput.value;
            let year = yearInput.value;
            let partName = partNameInput.value;
            let partNumber = partNumberInput.value;
            let condition = conditionInput.value;


            if (car == '' || year == '' || Number(year) < 1980 || Number(year) > 2023 || partName == '' || partNumber == '' || condition == '') {
                    return;
            }

            let newLi = document.createElement('li');

            newLi.setAttribute('class', 'part-content');

            let newArticle = document.createElement('article');

            let carModelP = document.createElement('p');
            carModelP.textContent = `Car Model: ${car}`;

            let yearP = document.createElement('p');
            yearP.textContent = `Car Year: ${year}`;


            let partNameP = document.createElement('p');
            partNameP.textContent = `Part Name: ${partName}`;

            let partNumberP = document.createElement('p');
            partNumberP.textContent = partNumber;

            let conditionaP = document.createElement('p');
            conditionaP.textContent = condition;

            newArticle.appendChild(carModelP);
            newArticle.appendChild(yearP);
            newArticle.appendChild(partNameP);
            newArticle.appendChild(partNumberP);
            newArticle.appendChild(conditionaP);


            let editBtn = document.createElement('button');
            editBtn.setAttribute('class', 'edit-btn');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', onEdit);

            let continueBtn = document.createElement('button');
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';
            continueBtn.addEventListener('click', onContinue);

            newLi.appendChild(newArticle);
            newLi.appendChild(editBtn);
            newLi.appendChild(continueBtn);

            infoList.appendChild(newLi);
            clearInputField();

            nextBtn.disabled = true;
            completeText.textContent = '';

            document.getElementById('complete-img').style.visibility = 'hidden';

            function onEdit() {

                    carInput.value = car
                    yearInput.value = year
                    partNameInput.value = partName
                    partNumberInput.value = partNumber
                    conditionInput.value = condition

                    newLi.remove();
                    nextBtn.disabled = false;

            }

            function onContinue() {

                    let liMoving = document.querySelector('.info-list li');
                    let confirmBtn = document.createElement('button');
                    confirmBtn.textContent = 'Confirm';
                    confirmBtn.setAttribute('class', 'confirm-btn');

                    confirmBtn.addEventListener('click', (e) => {
                            newLi.remove();
                            nextBtn.disabled = false;
                            completeText.textContent = "Part is Ordered!";
                            document.getElementById('complete-img').style.visibility = 'visible';
                    })

                    let cancelBtn = document.createElement('button');
                    cancelBtn.textContent = 'Cancel';
                    cancelBtn.setAttribute('class', 'cancel-btn');
                    editBtn.remove();
                    continueBtn.remove();
                    liMoving.appendChild(confirmBtn);
                    liMoving.appendChild(cancelBtn);
                    confirmList.appendChild(liMoving);
                    
                    cancelBtn.addEventListener('click', (e) => {
                            newLi.remove();
                            nextBtn.disabled = false;
                    });
            }
    }
    function clearInputField(e) {
            e ? e.preventDefault() : null;

            carInput.value = ''
            yearInput.value = '';
            partNameInput.value = '';
            partNumberInput.value = '';
            conditionInput.value = '';

    }

}
