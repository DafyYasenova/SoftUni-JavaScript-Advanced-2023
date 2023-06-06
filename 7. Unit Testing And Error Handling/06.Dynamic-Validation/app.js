function validate() {

    document.getElementById('email').addEventListener('change', onChange);
     // взимаме инпут полето по ИД и при евент Change, да се изпълни функцията

    function onChange(event) {

        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/gm;
        // ако въведеното в инпут полето отговаря на регекса, премахваме класа Error
        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
        // ако не отговаря на регекса, добавяме клас Error
            event.target.classList.add('error');
        }
    }
}