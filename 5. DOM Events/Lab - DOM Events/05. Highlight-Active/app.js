function focused() {
   let input = document.querySelectorAll('input[type="text"]'); // взимаме си инпут полето като колекция
   let inputArray = Array.from(input);

   function focusHandler(event){ // създаваме ф-я фокус, която ще се изпълни при евент фокус
    let element = event.target; //точния елемент ни е този, при който се е появило събитието фокус
    let parentEl = element.parentElement; // взимаме родителя на съответния елемент
    parentEl.classList.add('focused'); // придаваме клас фокус, който има определена стилизация
   }

   function blurHandler(event){ 
    let element = event.target;
    let parentEl = element.parentElement;
    parentEl.classList.remove('focused'); // ако не сме на съответния елемент, класа да се премахне
   }

   for(let element of inputArray){ // за всеки елемент от колекцията да се извикат функциите
    element.addEventListener('focus', focusHandler);
    element.addEventListener('blur', blurHandler);
   }
}