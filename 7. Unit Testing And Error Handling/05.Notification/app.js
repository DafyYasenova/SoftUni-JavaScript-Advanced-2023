function notify(message) {
    let notify = document.getElementById('notification'); // взимаме елемента по ИД
    notify.textContent = message;                         // за текстКонтент даваме входящото съобщение от инпута
    notify.style.display = 'block';                       // правим ДИВа да е с дисплей блок

    notify.addEventListener('click', (event) => {          // при клик на самия Див, дисплея да се сменя
        event.target.style.display = 'none';
    });
    // допълнителна функция, за автоматично сменяне на дисплея
    //  setTimeout(function(){
    //   notify.style.display = 'none';
    //  }, 5000); // като 2ри параметър се задават милисекунди
}