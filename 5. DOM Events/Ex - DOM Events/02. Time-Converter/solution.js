function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let allConvertButtons = Array.from(document.querySelectorAll('input[type="button"]'));
    // взимам всички бутони
    allConvertButtons.forEach(btn => btn.addEventListener('click', onConvert));
    // за всеки бутон при клик да се изпълни ф-ята онКонвърт

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {
        let days = value / rations[unit];

        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds,
        }
    }

    function onConvert(event) {
        let inputFiled = event.target.parentElement.querySelector('input[type="text"]');

        let time = convert(Number(inputFiled.value), inputFiled.id);
        // inputFiled.value в случая е параметъра value в конвърт Ф-я, а inputFiled.id е съответния unit
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}