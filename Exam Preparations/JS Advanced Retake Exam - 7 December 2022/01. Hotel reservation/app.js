window.addEventListener('load', solve);

function solve() {
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let checkInInput = document.getElementById('date-in');
    let checkOutInput = document.getElementById('date-out');
    let guestInput = document.getElementById('people-count');

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);

    let infoList = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let verification = document.getElementById('verification');

    function onNext(e) {
        e.preventDefault();
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let checkIn = checkInInput.value;
        let checkOut = checkOutInput.value;
        let guest = guestInput.value;

        if (firstName == '' || lastName == '' || checkIn == '' || checkOut == '' || guest == '' || checkIn > checkOut) {
            return;
        }
        let newLi = document.createElement('li');
        newLi.classList.add('reservation-content');

        let newArticle = document.createElement('article');

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Name: ${firstName} ${lastName}`;

        let pElementFromDate = document.createElement('p');
        pElementFromDate.textContent = `From date: ${checkIn}`;

        let pElementToDate = document.createElement('p');
        pElementToDate.textContent = `To date: ${checkOut}`;

        let pElementGuest = document.createElement('p');
        pElementGuest.textContent = `For ${guest} people`;

        newArticle.appendChild(h3Element);
        newArticle.appendChild(pElementFromDate);
        newArticle.appendChild(pElementToDate);
        newArticle.appendChild(pElementGuest);

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

        infoList.appendChild(newLi);
        nextBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
        clearInputField();

        function onEdit() {

            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            checkInInput.value = checkIn;
            checkOutInput.value = checkOut;
            guestInput.value = guest;

            newLi.remove();
            nextBtn.disabled = false;

        }
        function onContinue() {

            let newLiConfirm = document.createElement('li');
            newLiConfirm.classList.add('reservation-content');

            let newArticleConfirm = document.createElement('article');
            newArticleConfirm = newArticle;
            // тук не трябва на ново да създаваме всички елементи, 
            // а да присвоим целия нов артикъл от предишната функция!!!
            
            // let newH3Confirm = document.createElement('h3');
            // newH3Confirm.textContent = `Name: ${firstName} ${lastName}`;

            // let pFromDataConfirm = document.createElement('p');
            // pFromDataConfirm.textContent = `From date: ${checkIn}`;

            // let pToDataConfirm = document.createElement('p');
            // pToDataConfirm.textContent = `To date ${checkOut}`;

            // let pPersonConfirm = document.createElement('p');
            // pPersonConfirm.textContent = `For ${guest} people`;

            // newArticleConfirm.appendChild(newH3Confirm);
            // newArticleConfirm.appendChild(pFromDataConfirm);
            // newArticleConfirm.appendChild(pToDataConfirm);
            // newArticleConfirm.appendChild(pPersonConfirm);

            let confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';

            newLiConfirm.appendChild(newArticleConfirm);
            newLiConfirm.appendChild(confirmBtn);
            newLiConfirm.appendChild(cancelBtn);

            confirmList.appendChild(newLiConfirm);
           // newLi.remove();
           infoList.remove();

            confirmBtn.addEventListener('click', () => {
                verification.classList.add('reservation-confirmed')
                verification.textContent = 'Confirmed.';

                nextBtn.disabled = false;
                newLiConfirm.remove();
            });

            cancelBtn.addEventListener('click', () => {
                verification.classList.remove('reservation-confirmed')
                verification.classList.add('reservation-cancelled')
                verification.textContent = 'Cancelled.';

                nextBtn.disabled = false;
                newLiConfirm.remove();
            });
        }
    }
    function clearInputField(e) {
        e ? e.preventDefault() : null;

        firstNameInput.value = '';
        lastNameInput.value = '';
        checkInInput.value = '';
        checkOutInput.value = '';
        guestInput.value = '';
    }

}
