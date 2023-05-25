function validate() {

   let email = document.getElementById('email'); // изваждам въведения в инпут полето имейл
   email.addEventListener('change', changeHandler); // при евент да извика ф-я


   function changeHandler(event) {
      let validator = /[a-z]+@[a-z]+\.[a-z]+/g; // валидатора на имейла

      if (validator.test(event.target.value)) { // с метода test проверявам имейла отговаря ли на валидатора
         event.target.classList.remove('error'); 
      } else {
         event.target.classList.add('error');
      }
   }
}