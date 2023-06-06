function validate() {

    document.getElementById('submit').addEventListener('click', onClick);
    // добавяме слушател при клик на бутона Събмит

    let companyCheckBox = document.getElementById('company');
    // взимаме по ИД чек-бокса

    companyCheckBox.addEventListener('change', () => {
        // ако чек-бокса се промени
        let companyInfo = document.getElementById('companyInfo');
        if (companyCheckBox.checked === false) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block'
            // при чекнат чекбокс допълнителната информация за  компанията да се появи
        }

    });

    function onClick(event) {
        // при клик на бутона Събмит да се изпълни функцията
        event.preventDefault();
        // слагаме ПревентДефолт за да не рефрещне страницата

        let invalidInputFields = [];
        // в масив ще пушваме всички невалидни инпут полета

        let usernameInput = document.getElementById('username');
        let usernameValidator = /^[a-zA-Z0-9]{3,20}$/g;

        if (!usernameValidator.test(usernameInput.value)) {
            // ако въведения юзернейм не отговаря на паретна 
            invalidInputFields.push(usernameInput);
        }


        let emailInput = document.getElementById('email');
        let emailValidator = /^.*@.*\..*$/g;
        //let emailValidator = /^[a-z]+@[a-z]+\.[a-z]{0,3}/gm;
        if (!emailValidator.test(emailInput.value)) {
            invalidInputFields.push(emailInput);
        }


        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        // паролите в 2те полета трябда да са еднакви и да отговарят на патерна
        let passwordValivator = /^[a-z0-9\_]{5,15}$/gm; // (/^[\w]{5,15}$/g; и двата патерна минават)
        if (!passwordValivator.test(passwordInput.value) || passwordInput.value !== confirmPasswordInput.value) {
            invalidInputFields.push(passwordInput);
            invalidInputFields.push(confirmPasswordInput);
        }

        if (companyCheckBox.checked) {
            // ако чекбокса е чекнат можем да въведем НОМЕР 
            let companyNumber = document.getElementById('companyNumber');
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                // ако Номера е между 1000 и 9999 = валиден
                invalidInputFields.push(companyNumber)
                // ако ли не добавяме полето към масива с невалидни полета
            }
        }

        invalidInputFields.forEach(input => (input.style.borderColor = 'red'));
        // всеки невалиден елемент от масива го ограждаме в червено
        let validLine = document.getElementById('valid');
        invalidInputFields.length === 0 ? validLine.style.display = 'block' : validLine.style.display = 'none'
    }    // ако всички полета са валидни. т.е.дължината на масива с невалидни полета = 0, показваме със стайл.дисплей Валид-поле

}
