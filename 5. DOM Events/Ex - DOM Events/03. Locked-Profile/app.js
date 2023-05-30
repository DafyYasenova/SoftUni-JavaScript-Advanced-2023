function lockedProfile() {
 
    let profile = Array.from(document.querySelectorAll('.profile button')); //взимаме всеки бутон с клас профил 
   
    profile.forEach(button => button.addEventListener('click', onClick)); // за всеки бутон аддЕвент при клик

    function onClick(event){
        let currentProfile =  event.target.parentElement; // за всеки елемент, при който е възникнало Клик събитие, взимаме неговия родител
        let isActive = currentProfile.querySelector("input[value='unlock']").checked; // елемента е актвен, ако конктретния елемент с инпут велю и има пропърти чекед
        
        if(isActive){
            let moreInfo = Array.from(currentProfile.querySelectorAll('div')).find(div => div.id.includes('HiddenFields')); 
            //за всеки активен профил, имащ див със скрита информация правим скритата информация видима и обратно

            if(event.target.textContent === 'Show more'){
                event.target.textContent = 'Hide it';
                moreInfo.style.display = 'block';
            } else{
                event.target.textContent = 'Show more';
                moreInfo.style.display = 'none';
            }
        }
    }
}