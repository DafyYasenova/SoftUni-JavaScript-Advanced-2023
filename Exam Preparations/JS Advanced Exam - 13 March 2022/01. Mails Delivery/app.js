function solve() {

    let recipientInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messageInput = document.getElementById('message');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addHandler);

    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', clearInputField);

    let list = document.getElementById('list');
    let deleteList = document.querySelector('.delete-list');
    let sentList = document.querySelector('.sent-list');

    function addHandler(e) {
        e.preventDefault();

        let recipient = recipientInput.value;
        let title = titleInput.value;
        let message = messageInput.value;

        if (recipient === '' || title === '' || message === '') {
            return;
        }

        let liElement = document.createElement('li');

        let titleH4 = document.createElement('h4');
        titleH4.textContent = `Title: ${title}`;

        let recipientH4 = document.createElement('h4');
        recipientH4.textContent = `Recipient Name: ${recipient}`;

        let span = document.createElement('span');
        span.textContent = message;

        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');

        let sentBtn = document.createElement('button');
        sentBtn.setAttribute('id', 'send');
        sentBtn.setAttribute('type', 'submit');
        sentBtn.textContent = 'Send';
        sentBtn.addEventListener('click', onSent);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete)


        div.appendChild(sentBtn);
        div.appendChild(deleteBtn);

        liElement.appendChild(titleH4);
        liElement.appendChild(recipientH4);
        liElement.appendChild(span);
        liElement.appendChild(div);

        list.appendChild(liElement);

        clearInputField();

        function onSent(e) {
            e.preventDefault();
            liElement.remove();

            //let sentLiElement = e.target.parentElement;
            let sentLiElement = document.createElement('li');

            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;

            let divElement = document.createElement('div');
            divElement.classList.add('btn');

            let submitBtn = document.createElement('button');
            submitBtn.setAttribute('type', 'submit');
            submitBtn.textContent = 'Delete';
            submitBtn.classList.add('delete');
            submitBtn.addEventListener('click', (e) => onDelete(e, sentLiElement));

            divElement.appendChild(submitBtn);

            sentLiElement.appendChild(spanTo);
            sentLiElement.appendChild(spanTitle);
            sentLiElement.appendChild(divElement);

            sentList.appendChild(sentLiElement);

        }

        function onDelete(e, sentLiElement) {
            e.preventDefault();

            if (e.target.id === 'delete') {
                liElement.remove();
            } else {
                sentLiElement.remove();
            }

            let deleteLi = document.createElement('li');
            let deleteSpanRecip = document.createElement('span');
            deleteSpanRecip.textContent = `To: ${recipient}`;

            let deleteSpanTitle = document.createElement('span');
            deleteSpanRecip.textContent = `Title: ${title}`;

            deleteLi.appendChild(deleteSpanRecip);
            deleteLi.appendChild(deleteSpanTitle);
            deleteList.appendChild(deleteLi);

        }
    }
    function clearInputField(e) {
        e ? e.preventDefault() : null;

        recipientInput.value = ''
        titleInput.value = '';
        messageInput.value = '';
    }

}
solve()