window.addEventListener('load', solve);

function solve() {
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let numberOfPeopleInput = document.getElementById('people-count');
    let fromDateInput = document.getElementById('from-date');
    let daysInput = document.getElementById('days-count');

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    let ticketInfoList = document.querySelector('.ticket-info-list');
    let comfirmTicket = document.querySelector('.confirm-ticket');
    let div = document.getElementById('main');
    let body = document.getElementById('body');


    function onNext(e) {
        e.preventDefault();
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let numberOfPeople = numberOfPeopleInput.value;
        let fromDate = fromDateInput.value;
        let days = daysInput.value;

        if (firstName == '' || lastName == '' || numberOfPeople == '' || fromDate == '' || days == '') {
            return;
        }


        let newLi = document.createElement('li');
        newLi.classList.add('ticket');

        let newArticle = document.createElement('article');
        let newH3 = document.createElement('h3');
        newH3.textContent = `Name: ${firstName} ${lastName}`;

        let returnFirstName = firstName;
        let returnLastName = lastName;
        let pFromData = document.createElement('p');
        pFromData.textContent = `From date: ${fromDate}`;

        let pDays = document.createElement('p');
        pDays.textContent = `For ${days} days`;

        let pPerson = document.createElement('p');
        pPerson.textContent = `For ${numberOfPeople} people`;

        newArticle.appendChild(newH3);
        newArticle.appendChild(pFromData);
        newArticle.appendChild(pDays);
        newArticle.appendChild(pPerson);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', onEdit);

        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', onContinue);

        newLi.appendChild(newArticle);
        newLi.appendChild(editBtn);
        newLi.appendChild(continueBtn);

        ticketInfoList.appendChild(newLi);
        clearInputField();
        nextBtn.disabled = true;

        function onEdit(e) {
            let liElement = e.target.parentElement;


            let fNameValue = returnFirstName;
            let lNameValue = returnLastName;

            let paragraphs = liElement.querySelectorAll('p');

            let pFromDataValue = paragraphs[0].textContent;
            let pDaysValue = paragraphs[1].textContent;
            let pPersonValue = paragraphs[2].textContent;

            firstNameInput.value = fNameValue;
            lastNameInput.value = lNameValue;
            fromDateInput.value = pFromDataValue.substring(11);
            daysInput.value = pDaysValue.substring(4, pDaysValue.length - 5);
            numberOfPeopleInput.value = pPersonValue.substring(4, pPersonValue.length - 7);;

            liElement.remove();
            nextBtn.disabled = false;
        }


        function onContinue() {
            let newLiConfirm = document.createElement('li');
            newLiConfirm.classList.add('ticket-content');

            let newArticleConfirm = document.createElement('article');
            let newH3Confirm = document.createElement('h3');
            newH3Confirm.textContent = `Name: ${firstName} ${lastName}`;

            // let returnFirstName = firstName;
            // let returnLastName = lastName;
            let pFromDataConfirm = document.createElement('p');
            pFromDataConfirm.textContent = `From date: ${fromDate}`;

            let pDaysConfirm = document.createElement('p');
            pDaysConfirm.textContent = `For ${days} days`;

            let pPersonConfirm = document.createElement('p');
            pPersonConfirm.textContent = `For ${numberOfPeople} people`;

            newArticleConfirm.appendChild(newH3Confirm);
            newArticleConfirm.appendChild(pFromDataConfirm);
            newArticleConfirm.appendChild(pDaysConfirm);
            newArticleConfirm.appendChild(pPersonConfirm);

            let confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';

            confirmBtn.addEventListener('click', () => {

                let add = document.createElement('h1');
                add.id = 'thank-you';
                add.textContent = "Thank you, have a nice day!"
                let backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';
                div.remove();
                body.appendChild(add);
                body.appendChild(backBtn);
                backBtn.addEventListener("click", () => { window.location.reload() });
            });

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', () => comfirmTicket.remove());

            newLiConfirm.appendChild(newArticleConfirm);
            newLiConfirm.appendChild(confirmBtn);
            newLiConfirm.appendChild(cancelBtn);


            comfirmTicket.appendChild(newLiConfirm)
            ticketInfoList.remove();
            nextBtn.disabled = false;
            // <ul class="confirm-ticket">
        }
    }

    function clearInputField(e) {
        e ? e.preventDefault() : null;

        firstNameInput.value = ''
        lastNameInput.value = '';
        numberOfPeopleInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';
    }

}